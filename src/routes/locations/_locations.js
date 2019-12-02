const Status = {
  open: "Open",
  openingSoon: "Opening Soon",
  closed: "Closed"
};

const Default = {
  phoneNumber: "(864) 590-6760",
  emailAddress: "europeanmarketus@gmail.com"
};

const locations = [
  /*
  {
      location: 'Spartanburg, SC',
      address: '',
      emailAddress: Default.emailAddress,
      phoneNumber: Default.phoneNumber,
      status: Status.closed,
      hoursOfOperation: '',
      pageURL: 'spartanburg-sc'
  },
  */
  {
    location: "Anderson, SC",
    address: "418 N Main St, Anderson, SC 29621, USA",
    emailAddress: Default.emailAddress,
    phoneNumber: Default.phoneNumber,
    status: Status.open,
    hoursOfOperation: "Mon - Sat 10:30am - 7pm",
    pageURL: "anderson-sc",
    coordinates: {
      latitude: "34.5066776",
      longitude: "-82.6527905"
    }
  },
  /*
  {
      location: 'Boiling Springs, SC',
      address: '8275 Asheville Hwy, Boiling Springs, SC 29316, USA',
      emailAddress: Default.emailAddress,
      phoneNumber: Default.phoneNumber,
      status: Status.closed,
      hoursOfOperation: '',
      pageURL: 'boiling-springs-sc'
  },
  */
  {
    location: "Greenville, SC",
    address: "1635 Woodruff Rd, Greenville, SC 29607, USA",
    emailAddress: Default.emailAddress,
    phoneNumber: "(864) 520-1033",
    status: Status.open,
    hoursOfOperation: "Mon - Sat 10:30am - 7pm, Sun 12:30pm - 3pm",
    pageURL: "greenville-sc"
  },
  {
    location: "Hwy 9, Inman, SC",
    address: "5545 SC-9, Inman, SC 29349, USA",
    emailAddress: Default.emailAddress,
    phoneNumber: "(864) 754-4545",
    status: Status.open,
    hoursOfOperation: "Mon - Sat 10:30am - 7pm, Sun 12:30pm - 3pm",
    pageURL: "hwy-9-inman-sc"
  },
  {
    location: "Warehouse Inman, SC",
    address: "38 1st St, Inman, SC 29349, USA",
    emailAddress: Default.emailAddress,
    phoneNumber: "(864) 473-0299",
    status: Status.open,
    hoursOfOperation: "Mon - Sat 10:30am - 7pm, Sun 12:30pm - 3pm",
    pageURL: "warehouse-inman-sc"
  },
  {
    location: "Ooltewah, TN",
    address: "4921 Ooltewah Ringgold Rd Ooltewah, TN 37363",
    emailAddress: Default.emailAddress,
    phoneNumber: "(423) 899-3099",
    status: Status.open,
    hoursOfOperation:
      "Mon 3:30pm - 7pm, Tue - Sat 11am - 7pm, Sun 12:30pm - 3pm",
    pageURL: "ooltewah-tn"
  }
];

export default locations;
