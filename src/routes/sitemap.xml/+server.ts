import { LOCATIONS } from "$lib/data/locations"

const SITE = "https://europeanmarketus.com"

const staticPages = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/contact", changefreq: "monthly", priority: "0.8" },
  { path: "/locations", changefreq: "monthly", priority: "0.8" },
]

const locationPages = LOCATIONS.map((l) => ({
  path: `/locations/${l.pageSlug}`,
  changefreq: "monthly",
  priority: "0.7",
}))

const pages = [...staticPages, ...locationPages]

export const prerender = true

export const GET = () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${SITE}${p.path}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`

  return new Response(xml.trim(), {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "max-age=3600",
    },
  })
}
