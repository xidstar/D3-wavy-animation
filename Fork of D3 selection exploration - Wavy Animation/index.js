import { select, range } from 'd3';
import { vizData } from './vizData.js';
import { makeData } from './makeData.js';

const width = window.innerWidth;
const height = window.innerHeight;

const svg = select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);


let t = 0;
setInterval(() => {
  const n = 100 + Math.sin(t) * 5;
  const data = makeData(n,t);
  svg.call(vizData, data);
  
  
  t = t + 0.03;
}, 1000 / 60);
