
export function vizData(selection, data) {
   selection
    .selectAll('circle')
    .data(data)
  	.join('circle')
  	.attr('r', 20)
    .attr('cx', (d) => d.x)
    .attr('cy', (d) => d.y);
}