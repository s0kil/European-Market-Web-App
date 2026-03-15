import { memoize } from "./memoize"

export const viewportHeight = memoize((value: number): number =>
  Math.ceil(
    (value *
      Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0,
      )) /
      100,
  ),
)
