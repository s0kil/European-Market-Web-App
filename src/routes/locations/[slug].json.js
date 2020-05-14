import locations from "./_locations.js";

const lookup = new Map();
locations.forEach((location) => {
  lookup.set(location.pageSlug, JSON.stringify(location));
});

export function get(req, res) {
  const { slug } = req.params;

  if (lookup.has(slug)) {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(lookup.get(slug));
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        message: `Not found`,
      })
    );
  }
}
