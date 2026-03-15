import type { Context } from "@netlify/functions"

const GOOGLE_PLACES_API = "https://places.googleapis.com/v1/places"
const FIELD_MASK = [
  "id",
  "displayName",
  "formattedAddress",
  "internationalPhoneNumber",
  "regularOpeningHours",
  "location",
  "businessStatus",
].join(",")

const CACHE_SECONDS = 3600 // 1 hour

interface StoreConfig {
  placeId: string
  pageSlug: string
  emailAddress: string
  locationName: string
}

const STORES: StoreConfig[] = [
  {
    placeId: "ChIJgeyGQIljYIgR2dHFSd5gnE8",
    pageSlug: "collegedale-tn",
    emailAddress: "info@europeanmarketus.com",
    locationName: "Collegedale, TN",
  },
  {
    placeId: "ChIJ8Uwqhw1hV4gRwFKFAIs3j0U",
    pageSlug: "columbus-nc",
    emailAddress: "info@europeanmarketus.com",
    locationName: "Columbus, NC",
  },
]

interface GooglePlace {
  id: string
  displayName?: { text: string }
  formattedAddress?: string
  internationalPhoneNumber?: string
  regularOpeningHours?: {
    weekdayDescriptions?: string[]
  }
  location?: {
    latitude: number
    longitude: number
  }
  businessStatus?: string
}

interface LocationSummary {
  location: string
  pageSlug: string
  status: string
}

interface LocationDetail {
  location: string
  status: string
  address: string
  emailAddress: string
  phoneNumber: string
  hoursOfOperation: string[]
  coordinates: {
    latitude: number
    longitude: number
  }
}

function mapStatus(businessStatus?: string): string {
  if (businessStatus === "OPERATIONAL") return "Open"
  if (businessStatus === "CLOSED_TEMPORARILY") return "Temporarily Closed"
  if (businessStatus === "CLOSED_PERMANENTLY") return "Closed"
  return "Open"
}

async function fetchPlace(
  placeId: string,
  apiKey: string,
): Promise<GooglePlace | null> {
  const response = await fetch(`${GOOGLE_PLACES_API}/${placeId}`, {
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": FIELD_MASK,
    },
  })

  if (!response.ok) return null
  return (await response.json()) as GooglePlace
}

function toSummary(place: GooglePlace, config: StoreConfig): LocationSummary {
  return {
    location: config.locationName,
    pageSlug: config.pageSlug,
    status: mapStatus(place.businessStatus),
  }
}

function toDetail(place: GooglePlace, config: StoreConfig): LocationDetail {
  return {
    location: config.locationName,
    status: mapStatus(place.businessStatus),
    address: place.formattedAddress ?? "",
    emailAddress: config.emailAddress,
    phoneNumber: place.internationalPhoneNumber ?? "",
    hoursOfOperation: place.regularOpeningHours?.weekdayDescriptions ?? [],
    coordinates: {
      latitude: place.location?.latitude ?? 0,
      longitude: place.location?.longitude ?? 0,
    },
  }
}

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Cache-Control": `public, max-age=${CACHE_SECONDS}, s-maxage=${CACHE_SECONDS}`,
}

export default async (request: Request, _context: Context) => {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "API key not configured" }), {
      status: 500,
      headers,
    })
  }

  const url = new URL(request.url)
  const slug = url.searchParams.get("slug")

  if (slug) {
    // Single location detail
    const config = STORES.find((s) => s.pageSlug === slug)
    if (!config) {
      return new Response(JSON.stringify({ error: "Location not found" }), {
        status: 404,
        headers,
      })
    }

    const place = await fetchPlace(config.placeId, apiKey)
    if (!place) {
      return new Response(
        JSON.stringify({ error: "Failed to fetch place data" }),
        { status: 502, headers },
      )
    }

    return new Response(JSON.stringify(toDetail(place, config)), { headers })
  }

  // All locations list
  const results = await Promise.all(
    STORES.map(async (config) => {
      const place = await fetchPlace(config.placeId, apiKey)
      if (!place) return null
      return toSummary(place, config)
    }),
  )

  const locations = results.filter((r): r is LocationSummary => r !== null)

  return new Response(JSON.stringify(locations), { headers })
}

export const config = {
  path: "/api/locations",
}
