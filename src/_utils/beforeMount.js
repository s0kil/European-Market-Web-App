export const beforeMount = (callback) => {
  if (typeof window !== "undefined") return callback()
}
