export const memoize = (fun) => {
  const cache = {}
  return (...funArgs) =>
    cache[funArgs] === undefined
      ? (cache[funArgs] = fun(...funArgs))
      : cache[funArgs]
}
