const fs = require("fs");
const zlib = require("zlib");

const encoded = fs.readFileSync("bundle.b64", "utf8").trim();
const files = JSON.parse(zlib.gunzipSync(Buffer.from(encoded, "base64")).toString("utf8"));

for (const [name, content] of Object.entries(files)) {
  fs.writeFileSync(name, content, "utf8");
  console.log(`Built ${name}`);
}

console.log("SpeakBetter build complete");
