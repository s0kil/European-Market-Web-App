import { error } from "@sveltejs/kit"
import { LOCATIONS, LOCATION_DETAILS } from "$lib/data/locations"
import type { PageLoad } from "./$types"

export const load: PageLoad = ({ params }) => {
  const location = LOCATION_DETAILS[params.slug]
  if (!location) {
    error(404, "Location not found")
  }
  return { location, slug: params.slug }
}

export function entries() {
  return LOCATIONS.map((l) => ({ slug: l.pageSlug }))
}
