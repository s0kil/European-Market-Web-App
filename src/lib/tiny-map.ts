interface TinyMapOptions {
  center: [longitude: number, latitude: number]
  zoom: number
  tileUrl: string
  subdomains?: string
  size?: [width: number, height: number]
}

export function tinyMap(container: HTMLElement, options: TinyMapOptions): void {
  const tileSize = 256
  const R = 6378137
  const maxLat = 85.0511287798

  const pixelCenter = lngLatToPoint(options.center, options.zoom)

  const size: [number, number] = options.size || [
    container.offsetWidth,
    container.offsetHeight,
  ]
  const halfSize: [number, number] = [size[0] / 2, size[1] / 2]

  const minTile = [
    ((pixelCenter[0] - halfSize[0]) / tileSize) | 0,
    ((pixelCenter[1] - halfSize[1]) / tileSize) | 0,
  ]

  const maxTile = [
    ((pixelCenter[0] + halfSize[0]) / tileSize + 1) | 0,
    ((pixelCenter[1] + halfSize[1]) / tileSize + 1) | 0,
  ]

  for (let y = minTile[1]!; y < maxTile[1]!; y++) {
    for (let x = minTile[0]!; x < maxTile[0]!; x++) {
      const tile = new Image()
      tile.style.cssText =
        "position: absolute;" +
        "left:" +
        ((halfSize[0] + x * tileSize - pixelCenter[0]) | 0) +
        "px;" +
        "top:" +
        ((halfSize[1] + y * tileSize - pixelCenter[1]) | 0) +
        "px;" +
        "width:" +
        tileSize +
        "px;" +
        "height:" +
        tileSize +
        "px;"
      tile.alt = ""
      tile.src = getUrl(x, y)
      container.appendChild(tile)
    }
  }

  function getUrl(x: number, y: number): string {
    return options.tileUrl
      .replace(
        "{s}",
        options.subdomains
          ? options.subdomains[Math.abs(x + y) % options.subdomains.length]!
          : "",
      )
      .replace("{x}", String(x))
      .replace("{y}", String(y))
      .replace("{z}", String(options.zoom))
  }

  function lngLatToPoint(
    lngLat: [number, number],
    zoom: number,
  ): [number, number] {
    const point = project(lngLat)
    const scale = 256 * Math.pow(2, zoom)
    const k = 0.5 / (Math.PI * R)
    point[0] = scale * (k * point[0] + 0.5)
    point[1] = scale * (-k * point[1] + 0.5)
    return point
  }

  function project(lngLat: [number, number]): [number, number] {
    const d = Math.PI / 180
    const lat = Math.max(Math.min(maxLat, lngLat[1]), -maxLat)
    const sin = Math.sin(lat * d)
    return [R * lngLat[0] * d, (R * Math.log((1 + sin) / (1 - sin))) / 2]
  }
}
