import { browser } from "$app/env"

export function imageCDN(path, options = "") {
  if (browser) {
    if (!location.origin.includes(":8000")) {
      return `https://ik.imagekit.io/esf/${path}${options}`
    } else return `/${path}`
  } else {
    // https://stackoverflow.com/a/19126281
    return "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D"
  }
}
