/**
 * Fibonacci Sphere
 *
 * @see https://stackoverflow.com/questions/60578028/how-can-i-achieve-an-even-distribution-of-sprites-across-the-surface-of-a-sphere
 * @see https://stackoverflow.com/questions/9600801/evenly-distributing-n-points-on-a-sphere/26127012#26127012
 */
export function fibonacciSphere(numPoints: number, pointIndex: number): [number, number, number] {
  const rnd = 1;
  const offset = 2 / numPoints;
  const increment = Math.PI * (3 - Math.sqrt(5));

  const y = pointIndex * offset - 1 + offset / 2;
  const r = Math.sqrt(1 - y ** 2);

  const phi = ((pointIndex + rnd) % numPoints) * increment;

  const x = Math.cos(phi) * r;
  const z = Math.sin(phi) * r;

  return [x, y, z];
}
