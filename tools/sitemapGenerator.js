const SitemapGenerator = require("sitemap-generator");

let generator = SitemapGenerator("https://europeanmarketus.com", {
  ignoreInvalidSSL: false,
  maxDepth: 100,
  lastMod: true,
  changeFreq: "weekly",
  filepath: "./static/sitemap.xml",
  stripQuerystring: true
  // priorityMap: [1.0, 0.8, 0.6, 0.5]
});

generator.on("add", url => console.info(url));

generator.on("done", () => {
  console.log("Sitemap Created");
});

generator.start();
