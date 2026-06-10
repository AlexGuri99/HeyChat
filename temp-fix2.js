const fs = require("fs");

// Fix en.ts
let en = fs.readFileSync("app/locales/en.ts", "utf-8");

// Remove Mask section (from "Mask: {" to the next top-level key after it)
en = en.replace(/      Mask: \{[\s\S]*?      \},\r?\n/, "");

// Remove Discovery section
en = en.replace(/      Discovery: \{[\s\S]*?      \},\r?\n/, "");

fs.writeFileSync("app/locales/en.ts", en, "utf-8");
console.log("en.ts done");

// Fix cn.ts
let cn = fs.readFileSync("app/locales/cn.ts", "utf-8");

// Remove Mask section
cn = cn.replace(/      Mask: \{[\s\S]*?      \},\r?\n/, "");

// Remove Discovery section
cn = cn.replace(/      Discovery: \{[\s\S]*?      \},\r?\n/, "");

fs.writeFileSync("app/locales/cn.ts", cn, "utf-8");
console.log("cn.ts done");