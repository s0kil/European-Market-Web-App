const SitemapGenerator = require("sitemap-generator");

const sitemapFilePath = require("path").join(
  "__sapper__",
  "export",
  "sitemap.xml"
);

SitemapGenerator("https://europeanmarketus.com", {
  filepath: sitemapFilePath,
}).start();
