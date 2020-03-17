const fs = require("fs");

import stringToSlug from "../../../_utils/stringToSlug";

export const products = fs.readFileSync(
  "src/routes/store/products/_products.json",
  "utf8"
);

const productCategories = [];
const productsDeserialized = JSON.parse(products);

for (const product in productsDeserialized) {
  const category = productsDeserialized[product].categoryTitle;

  productCategories[category] = stringToSlug(category);
}

const productCategoriesArray = [];
for (const key in productCategories) {
  productCategoriesArray.push({
    title: key,
    slug: productCategories[key]
  });
}

export const categories = productCategoriesArray;
