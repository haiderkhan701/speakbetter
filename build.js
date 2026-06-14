const fs = require("fs");
const zlib = require("zlib");

const files = {
  "index.html": "bundles/index.b64",
  "styles.css": "bundles/styles.b64",
  "app.js": "bundles/app.b64",
  "server.js": "bundles/server.b64"
};

for (const [output, bundle] of Object.entries(files)) {
  const encoded = fs.readFileSync(bundle, "utf8").trim();
  fs.writeFileSync(output, zlib.gunzipSync(Buffer.from(encoded, "base64")));
  console.log(`Built ${output}`);
}

console.log("SpeakBetter build complete");
