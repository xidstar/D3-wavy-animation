import { range } from 'd3';

export function makeData(n, t) {
	const data = range(n).map((d) => ({
    x: d * 100 + 50,
    y: 250 + Math.sin(d + t) * 200,
  }));
  return data;
}