import isBrowser from "./isBrowser";

export function imageCDN(path, options = "") {
  if (isBrowser) {
    if (!location.origin.includes(":8000")) {
      return `https://image-cdn.europeanmarketus.com/${path}?wat=0&optipress=3&org_if_sml=1${options}`;
    } else return path;
  } else {
    // https://stackoverflow.com/a/19126281
    return "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D";
  }
}
