import { categories } from "./_products.js";

export async function get(_, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  res.end(JSON.stringify(categories));
}
