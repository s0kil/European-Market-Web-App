const Status = {
  Open: "Open",
  Closed: "Closed",
  Soon: "Coming Soon"
};

const Default = {
  phoneNumber: "(864) 590-6760",
  emailAddress: "europeanmarketus@gmail.com"
};

/*
Template
{
  location: "",
  address: "",
  emailAddress: Default.emailAddress,
  phoneNumber: Default.phoneNumber,
  status: Status.Soon,
  hoursOfOperation: "",
  pageSlug: "",
  coordinates: {
    latitude: "",
    longitude: ""
  }
},
*/

const locations = [
  {
    location: "Lexington, SC",
    address: "5483 Sunset Blvd, Lexington, SC 29072",
    emailAddress: Default.emailAddress,
    phoneNumber: Default.phoneNumber,
    status: Status.Open,
    hoursOfOperation: "Sun - Sat 9am - 7pm",
    pageSlug: "lexington-sc",
    coordinates: {
      latitude: "33.9979416",
      longitude: "-81.2205587"
    }
  },
  {
    location: "Columbia, SC",
    address: "",
    emailAddress: Default.emailAddress,
    phoneNumber: Default.phoneNumber,
    status: Status.Soon,
    hoursOfOperation: "",
    pageSlug: "columbia-sc",
    coordinates: {
      latitude: "",
      longitude: ""
    }
  },
  {
    location: "Spartanburg, SC",
    address: "8047 Warren H Abernathy Hwy, Spartanburg, SC 29301",
    emailAddress: Default.emailAddress,
    phoneNumber: Default.phoneNumber,
    status: Status.Soon,
    hoursOfOperation: "",
    pageSlug: "spartanburg-sc",
    coordinates: {
      latitude: "34.9353588",
      longitude: "-82.0065515"
    }
  },
  {
    location: "Indian Land, SC",
    address: "9792 Charlotte Hwy, Indian Land, SC 29707",
    emailAddress: Default.emailAddress,
    phoneNumber: Default.phoneNumber,
    status: Status.Open,
    hoursOfOperation: "Mon - Fri 6am - 9pm, Sat 7am - 9pm, Sun 8am - 8pm",
    pageSlug: "indian-land-sc",
    coordinates: {
      latitude: "35.002738",
      longitude: "-80.8571356"
    }
  },
  {
    location: "Anderson, SC",
    address: "715 E Greenville St, Anderson, SC 29621",
    emailAddress: Default.emailAddress,
    phoneNumber: Default.phoneNumber,
    status: Status.Open,
    hoursOfOperation: "Mon - Sat 10:30am - 7pm",
    pageSlug: "anderson-sc",
    coordinates: {
      latitude: "34.5153964",
      longitude: "-82.648982"
    }
  },
  {
    location: "Boiling Springs, SC",
    address: "8275 Asheville Hwy, Boiling Springs, SC 29316",
    emailAddress: Default.emailAddress,
    phoneNumber: Default.phoneNumber,
    status: Status.Soon,
    hoursOfOperation: "",
    pageSlug: "boiling-springs-sc",
    coordinates: {
      latitude: "34.9957813",
      longitude: "-82.0013986"
    }
  },
  {
    location: "Greenville, SC",
    address: "1635 Woodruff Rd, Greenville, SC 29607",
    emailAddress: Default.emailAddress,
    phoneNumber: "(864) 520-1033",
    status: Status.Open,
    hoursOfOperation: "Mon - Sat 10:30am - 6:30pm",
    pageSlug: "greenville-sc",
    coordinates: {
      latitude: "34.8197697",
      longitude: "-82.2762912"
    }
  },
  {
    location: "Hwy 9, Inman, SC",
    address: "5545 SC-9, Inman, SC 29349",
    emailAddress: Default.emailAddress,
    phoneNumber: "(864) 754-4545",
    status: Status.Open,
    hoursOfOperation: "Mon - Sat 11am - 6:30pm",
    pageSlug: "hwy-9-inman-sc",
    coordinates: {
      latitude: "35.072714",
      longitude: "-82.0196507"
    }
  },
  {
    location: "Warehouse Inman, SC",
    address: "38 1st St, Inman, SC 29349",
    emailAddress: Default.emailAddress,
    phoneNumber: "(864) 473-0299",
    status: Status.Open,
    hoursOfOperation: "Mon - Sat 10:30am - 7pm, Sun 12:30pm - 3pm",
    pageSlug: "warehouse-inman-sc",
    coordinates: {
      latitude: "35.0401305",
      longitude: "-82.1090651"
    }
  },
  {
    location: "Ooltewah, TN",
    address: "4921 Ooltewah Ringgold Rd Ooltewah, TN 37363",
    emailAddress: Default.emailAddress,
    phoneNumber: "(423) 899-3099",
    status: Status.Open,
    hoursOfOperation:
      "Mon 3:30pm - 7pm, Tue - Sat 11am - 7pm, Sun 12:30pm - 3pm",
    pageSlug: "ooltewah-tn",
    coordinates: {
      latitude: "35.0586237",
      longitude: "-85.0698952"
    }
  }
];

export default locations;
