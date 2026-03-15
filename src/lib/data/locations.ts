export interface Location {
  location: string
  pageSlug: string
  status: string
}

export interface LocationDetail {
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

export const LOCATIONS: Location[] = [
  {
    location: "Collegedale, TN",
    pageSlug: "collegedale-tn",
    status: "Open",
  },
  {
    location: "Columbus, NC",
    pageSlug: "columbus-nc",
    status: "Open",
  },
]

export const LOCATION_DETAILS: Record<string, LocationDetail> = {
  "collegedale-tn": {
    location: "Collegedale, TN",
    status: "Open",
    address: "4921 Ooltewah Ringgold Rd, Collegedale, TN 37363, USA",
    emailAddress: "info@europeanmarketus.com",
    phoneNumber: "+1 423-899-3099",
    hoursOfOperation: [
      "Monday: 11:30 AM – 6:30 PM",
      "Tuesday: 11:30 AM – 6:30 PM",
      "Wednesday: 11:30 AM – 6:30 PM",
      "Thursday: 11:30 AM – 6:30 PM",
      "Friday: 11:30 AM – 6:30 PM",
      "Saturday: 11:30 AM – 6:30 PM",
      "Sunday: Closed",
    ],
    coordinates: {
      latitude: 35.0586237,
      longitude: -85.0677065,
    },
  },
  "columbus-nc": {
    location: "Columbus, NC",
    status: "Open",
    address: "155 W Mills St, Columbus, NC 28722, USA",
    emailAddress: "info@europeanmarketus.com",
    phoneNumber: "+1 864-590-6760",
    hoursOfOperation: [
      "Monday: 10:00 AM – 6:30 PM",
      "Tuesday: 10:00 AM – 6:30 PM",
      "Wednesday: 10:00 AM – 6:30 PM",
      "Thursday: 10:00 AM – 6:30 PM",
      "Friday: 10:00 AM – 6:30 PM",
      "Saturday: 10:00 AM – 6:30 PM",
      "Sunday: Closed",
    ],
    coordinates: {
      latitude: 35.249447,
      longitude: -82.2012913,
    },
  },
}
