/* rotate something*/
export function rotate(
  x: number,
  y: number,
  sin: number,
  cos: number,
  reverse: any
) {
  return {
    x: reverse ? x * cos + y * sin : x * cos - y * sin,
    y: reverse ? y * cos - x * sin : y * cos + x * sin,
  };
}
