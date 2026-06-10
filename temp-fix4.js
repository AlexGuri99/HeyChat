const fs = require("fs");
let c = fs.readFileSync("app/components/settings.tsx", "utf-8");

// 1. Remove useMaskStore import
c = c.replace('import { useMaskStore } from "../store/mask";\r\n', "");

// 2. Remove maskStore variable
c = c.replace("  const maskStore = useMaskStore();\r\n", "");

// 3. Remove mask stat from stateOverview
c = c.replace("      mask: Object.keys(maskStore.masks).length,\r\n", "");
c = c.replace(", maskStore.masks, promptStore.prompts", ", promptStore.prompts");

// 4. Remove mask toggle section (lines 1742-1779)
const marker = "<SyncItems />";
const markerIdx = c.indexOf(marker);
const afterMarker = markerIdx + marker.length;

// Find the next <List> after the mask list
const nextList = c.indexOf("<List>", afterMarker);
if (nextList > afterMarker) {
  // Remove everything from after <SyncItems /> to before the next <List>
  const beforeNextList = c.lastIndexOf("\n", nextList);
  c = c.substring(0, afterMarker) + "\n\n" + c.substring(beforeNextList);
  console.log("Removed mask toggle section");
} else {
  console.log("Could not find next <List> after markers");
}

// 5. Add OpenRouter import if not present
if (!c.includes("OpenRouter,")) {
  c = c.replace("AI302,", "AI302,\n  OpenRouter,");
}

// 6. Add OpenRouter config component after ai302ConfigComponent if not present
const openRouterPattern = "ServiceProvider.OpenRouter";
if (!c.includes(openRouterPattern)) {
  // Find the end of ai302ConfigComponent and add OpenRouter component after it
  const ai302End = "  const openRouterConfigComponent = accessStore.provider === ServiceProvider.OpenRouter && (";
  if (!c.includes(ai302End)) {
    // Add after ai302ConfigComponent ends
    const ai302Close = "      </>\n  );\n\n  return (";
    const closeIdx = c.indexOf(ai302Close);
    if (closeIdx >= 0) {
      const component = `
  const openRouterConfigComponent = accessStore.provider === ServiceProvider.OpenRouter && (
    <>
      <ListItem
        title={Locale.Settings.Access.OpenRouter.Endpoint.Title}
        subTitle={
          Locale.Settings.Access.OpenRouter.Endpoint.SubTitle +
          OpenRouter.ExampleEndpoint
        }
      >
        <input
          aria-label={Locale.Settings.Access.OpenRouter.Endpoint.Title}
          type="text"
          value={accessStore.openrouterUrl}
          placeholder={OpenRouter.ExampleEndpoint}
          onChange={(e) =>
            accessStore.update(
              (access) => (access.openrouterUrl = e.currentTarget.value),
            )
          }
        ></input>
      </ListItem>
      <ListItem
        title={Locale.Settings.Access.OpenRouter.ApiKey.Title}
        subTitle={Locale.Settings.Access.OpenRouter.ApiKey.SubTitle}
      >
        <PasswordInput
          aria-label={Locale.Settings.Access.OpenRouter.ApiKey.Title}
          value={accessStore.openrouterApiKey}
          type="text"
          placeholder={Locale.Settings.Access.OpenRouter.ApiKey.Placeholder}
          onChange={(e) => {
            accessStore.update(
              (access) => (access.openrouterApiKey = e.currentTarget.value),
            );
          }}
        />
      </ListItem>
    </>
  );

  return (`;
      c = c.substring(0, closeIdx) + component + c.substring(closeIdx + ai302Close.length);
      console.log("Added OpenRouter config component");
    }
  }
}

// 7. Add openRouterConfigComponent to the rendering section if not present
if (!c.includes("{openRouterConfigComponent}")) {
  const renderMarker = "{ai302ConfigComponent}";
  const renderIdx = c.indexOf(renderMarker);
  if (renderIdx >= 0) {
    c = c.substring(0, renderIdx + renderMarker.length) + "\n                  {openRouterConfigComponent}" + c.substring(renderIdx + renderMarker.length);
    console.log("Added OpenRouter component to render");
  }
}

// 8. Remove duplicate blank lines
c = c.replace(/\n{3,}/g, "\n\n");

fs.writeFileSync("app/components/settings.tsx", c, "utf-8");
console.log("All settings.tsx changes applied");