import { dev } from "$app/environment"

export function imageCDN(path: string, options: string = ""): string {
  if (dev) {
    return `/${path}`
  }
  return `https://ik.imagekit.io/esf/${path}${options}`
}
