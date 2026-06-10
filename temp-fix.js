const fs = require("fs");
let c = fs.readFileSync("app/components/settings.tsx", "utf-8");

// Remove useMaskStore import
c = c.replace('import { useMaskStore } from "../store/mask";\r\n', "");

// Remove maskStore variable
c = c.replace("  const maskStore = useMaskStore();\r\n", "");

// Remove mask stat from stateOverview
c = c.replace("      mask: Object.keys(maskStore.masks).length,\r\n", "");
c = c.replace(", maskStore.masks, promptStore.prompts", ", promptStore.prompts");

// Remove mask toggle sections
const syncIdx = c.indexOf("<SyncItems />") + "<SyncItems />".length;
const promptDisableIdx = c.indexOf('title={Locale.Settings.Prompt.Disable.Title}');
// Find the start of the line with prompt Disable
const beforePrompt = c.lastIndexOf("\r\n", promptDisableIdx) + 2;
c = c.substring(0, syncIdx) + "\r\n\r\n" + c.substring(beforePrompt);

fs.writeFileSync("app/components/settings.tsx", c, "utf-8");
console.log("done");