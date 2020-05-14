import { memoize } from "./memoize.js";

export const viewportHeight = memoize(value =>
  Math.ceil(
    (value *
      Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      )) /
      100
  )
);
