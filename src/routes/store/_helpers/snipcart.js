import loadAsset from "loadjs";

export async function loadSnipCart(onSuccess, onError) {
  return loadAsset(
    [
      "https://cdn.snipcart.com/themes/v3.0.9/default/snipcart.css",
      "https://cdn.snipcart.com/themes/v3.0.9/default/snipcart.js"
    ],
    {
      numRetries: 7,
      returnPromise: true
    }
  )
    .then(() => true)
    .catch(() => false);
}
