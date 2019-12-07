export function imageCDN(path, options = "") {
  if (typeof document === "object") {
    if (!location.origin.includes(":8000")) {
      return `https://images.weserv.nl/?url=${location.origin}${path}&l=9&il${options}`;
    } else return path;
  } else {
    // https://stackoverflow.com/a/19126281
    return "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D";
  }
}
