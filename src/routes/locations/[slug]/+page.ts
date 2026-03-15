import { error } from "@sveltejs/kit"
import type { PageLoad } from "./$types"

const LOCATIONS_API = "/api/locations"

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

export const load: PageLoad = async ({ params, fetch }) => {
  const response = await fetch(`${LOCATIONS_API}?slug=${params.slug}`)

  if (response.ok) {
    const location: LocationDetail = (await response.json()) as LocationDetail
    return { location }
  }

  const text = await response.text()
  error(response.status, text)
}
