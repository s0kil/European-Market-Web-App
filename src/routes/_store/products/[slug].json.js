import {
  productCategories,
  productsDeserialized as products,
} from "./_products.js";

export async function get(req, res) {
  const { slug } = req.params;

  const slugCategory = (() => {
    for (const category in productCategories) {
      if (slug === productCategories[category]) return category;
    }
  })();

  const payload = products.filter(
    (product) => product["categoryTitle"] === slugCategory
  );

  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  res.end(JSON.stringify(payload));
}
