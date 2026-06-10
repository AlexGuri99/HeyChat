const fs = require("fs");

function removeSection(content, sectionName, indent) {
  const regex = new RegExp(`^${indent}${sectionName}: \\{`, "m");
  const match = content.match(regex);
  if (!match) { console.log(`  '${sectionName}' not found at indent '${indent}', skipping`); return content; }

  const startIdx = match.index;
  let depth = 0;
  let i = startIdx;
  while (i < content.length) {
    if (content[i] === '{') depth++;
    else if (content[i] === '}') {
      depth--;
      if (depth === 0) {
        let endIdx = i + 1;
        if (content[endIdx] === ',') endIdx++;
        while (endIdx < content.length && (content[endIdx] === '\r' || content[endIdx] === '\n')) endIdx++;
        const removed = content.substring(startIdx, endIdx);
        console.log(`  Removed '${sectionName}' (${removed.split('\n').length} lines)`);
        return content.substring(0, startIdx) + content.substring(endIdx);
      }
    }
    i++;
  }
  console.log(`  Could not find closing brace for '${sectionName}'`);
  return content;
}

// Fix en.ts
let en = fs.readFileSync("app/locales/en.ts", "utf-8");
console.log("en.ts:");
en = removeSection(en, "Mask", "  ");    // top-level Mask
en = removeSection(en, "Discovery", "  ");
fs.writeFileSync("app/locales/en.ts", en, "utf-8");

// Fix cn.ts
let cn = fs.readFileSync("app/locales/cn.ts", "utf-8");
console.log("cn.ts:");
cn = removeSection(cn, "Mask", "  ");
cn = removeSection(cn, "Discovery", "  ");
fs.writeFileSync("app/locales/cn.ts", cn, "utf-8");

console.log("Done");