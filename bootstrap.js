const fs = require("fs");
const zlib = require("zlib");

const files = JSON.parse(zlib.gunzipSync(Buffer.from(fs.readFileSync("bundle.b64", "utf8").trim(), "base64")).toString("utf8"));
for (const [name, content] of Object.entries(files)) fs.writeFileSync(name, content, "utf8");
require("./server.js");
