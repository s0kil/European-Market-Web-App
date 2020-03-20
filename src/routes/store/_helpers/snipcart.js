import loadAsset from "loadjs";

// Load SnipCart Asynchronously
export async function loadSnipCart() {
  // Check If SnipCart Already Loaded
  if (window.Snipcart === "object") return true;

  const snipCartVersion = "3.0.10";
  return loadAsset(
    [
      `https://cdn.snipcart.com/themes/v${snipCartVersion}/default/snipcart.css`,
      `https://cdn.snipcart.com/themes/v${snipCartVersion}/default/snipcart.js`
    ],
    {
      numRetries: 7,
      returnPromise: true
    }
  )
    .then(() => true)
    .catch(() => false);
}
