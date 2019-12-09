const SitemapGenerator = require("sitemap-generator");

let generator = SitemapGenerator("https://europeanmarketus.com", {
  maxDepth: 100,
  lastMod: true,
  changeFreq: "weekly",
  filepath: "./static/sitemap.xml",
  stripQuerystring: true,
  // priorityMap: [1.0, 0.8, 0.6, 0.5]
});

generator.on("done", () => {
  console.log("Sitemap Created");
});

generator.start();