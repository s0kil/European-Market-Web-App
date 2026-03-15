import { LOCATIONS } from "$lib/data/locations"
import type { PageLoad } from "./$types"

export const load: PageLoad = () => {
  return { locations: LOCATIONS }
}
