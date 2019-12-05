let webpSupport = null;

async function webpIsSupported() {
  if (webpSupport != null) return webpSupport;
  else if (!self.createImageBitmap) return false;

  const blob = await fetch(
    "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA="
  ).then(r => r.blob());

  createImageBitmap(blob).then(
    () => (webpSupport = true),
    () => (webpSupport = true)
  );

  return webpSupport;
}

export function imageCDN(path, options = "") {
  if (typeof document === "object") {
    if (!location.origin.includes(":8000")) {
      let webp = "";
      if (!path.endsWith(".png") && webpIsSupported()) webp = "&output=webp";
      return `https://images.weserv.nl/?url=${location.origin}${path}&l=9&il${webp}${options}`;
    } else {
      return path;
    }
  }
}
