import supportsWebP from "supports-webp";

let WebPIsSupported = undefined;
// Check If WebP is supported by browser then Memoize the result.
export const WebPSupported = (async () => {
  if (WebPIsSupported !== undefined) return WebPIsSupported;
  else if (await supportsWebP) WebPIsSupported = true;
  else WebPIsSupported = false;
  return WebPIsSupported;
})();

export async function imageCDNWebPHelper() {
  return (await WebPSupported) === true ? "&force_format=webp" : "";
}
