import locations from "./_locations.js";

const contents = JSON.stringify(
  locations
    .map((location) => {
      return {
        location: location.location,
        pageSlug: location.pageSlug,
        status: location.status,
      };
      // https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript/45544166#45544166
    })
    .sort((a, b) => a.location.localeCompare(b.location))
);

export function get(_, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(contents);
}
