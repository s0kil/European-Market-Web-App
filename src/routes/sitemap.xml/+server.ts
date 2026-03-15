const SITE = "https://europeanmarketus.com"
const LOCATIONS_API =
  "https://danielsokil-esf-locations.builtwithdark.com/"

const staticPages = ["/", "/contact", "/locations"]

interface Location {
  pageSlug: string
}

export const GET = async ({ fetch }) => {
  let locationPages: string[] = []

  try {
    const response = await fetch(LOCATIONS_API)
    if (response.ok) {
      const locations = (await response.json()) as Location[]
      locationPages = locations.map((l) => `/locations/${l.pageSlug}`)
    }
  } catch {
    // API unavailable — include only static pages
  }

  const allPages = [...staticPages, ...locationPages]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${SITE}${page}</loc>
    <changefreq>${page === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${page === "/" ? "1.0" : page.startsWith("/locations/") && page !== "/locations" ? "0.7" : "0.8"}</priority>
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
