import type { PageLoad } from "./$types"

const LOCATIONS_API = "/api/locations"

interface Location {
  location: string
  pageSlug: string
  status: string
}

export const load: PageLoad = async ({ fetch }) => {
  const response = await fetch(LOCATIONS_API)
  const locations: Location[] = (await response.json()) as Location[]
  return { locations }
}
