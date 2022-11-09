(function (d3) {
  'use strict';

  function vizData(selection, data) {
     selection
      .selectAll('circle')
      .data(data)
    	.join('circle')
    	.attr('r', 20)
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y);
  }

  function makeData(n, t) {
  	const data = d3.range(n).map((d) => ({
      x: d * 100 + 50,
      y: 250 + Math.sin(d + t) * 200,
    }));
    return data;
  }

  const width = window.innerWidth;
  const height = window.innerHeight;

  const svg = d3.select('body')
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

}(d3));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbInZpekRhdGEuanMiLCJtYWtlRGF0YS5qcyIsImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGZ1bmN0aW9uIHZpekRhdGEoc2VsZWN0aW9uLCBkYXRhKSB7XG4gICBzZWxlY3Rpb25cbiAgICAuc2VsZWN0QWxsKCdjaXJjbGUnKVxuICAgIC5kYXRhKGRhdGEpXG4gIFx0LmpvaW4oJ2NpcmNsZScpXG4gIFx0LmF0dHIoJ3InLCAyMClcbiAgICAuYXR0cignY3gnLCAoZCkgPT4gZC54KVxuICAgIC5hdHRyKCdjeScsIChkKSA9PiBkLnkpO1xufSIsImltcG9ydCB7IHJhbmdlIH0gZnJvbSAnZDMnO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZURhdGEobiwgdCkge1xuXHRjb25zdCBkYXRhID0gcmFuZ2UobikubWFwKChkKSA9PiAoe1xuICAgIHg6IGQgKiAxMDAgKyA1MCxcbiAgICB5OiAyNTAgKyBNYXRoLnNpbihkICsgdCkgKiAyMDAsXG4gIH0pKTtcbiAgcmV0dXJuIGRhdGE7XG59IiwiaW1wb3J0IHsgc2VsZWN0LCByYW5nZSB9IGZyb20gJ2QzJztcbmltcG9ydCB7IHZpekRhdGEgfSBmcm9tICcuL3ZpekRhdGEuanMnO1xuaW1wb3J0IHsgbWFrZURhdGEgfSBmcm9tICcuL21ha2VEYXRhLmpzJztcblxuY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbmNvbnN0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuY29uc3Qgc3ZnID0gc2VsZWN0KCdib2R5JylcbiAgLmFwcGVuZCgnc3ZnJylcbiAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpO1xuXG5cbmxldCB0ID0gMDtcbnNldEludGVydmFsKCgpID0+IHtcbiAgY29uc3QgbiA9IDEwMCArIE1hdGguc2luKHQpICogNTtcbiAgY29uc3QgZGF0YSA9IG1ha2VEYXRhKG4sdCk7XG4gIHN2Zy5jYWxsKHZpekRhdGEsIGRhdGEpO1xuICBcbiAgXG4gIHQgPSB0ICsgMC4wMztcbn0sIDEwMDAgLyA2MCk7XG4iXSwibmFtZXMiOlsicmFuZ2UiLCJzZWxlY3QiXSwibWFwcGluZ3MiOiI7OztFQUNPLFNBQVMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUU7RUFDekMsR0FBRyxTQUFTO0VBQ1osS0FBSyxTQUFTLENBQUMsUUFBUSxDQUFDO0VBQ3hCLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQztFQUNmLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztFQUNsQixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO0VBQ2pCLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzNCLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDNUI7O0VDUE8sU0FBUyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtFQUMvQixDQUFDLE1BQU0sSUFBSSxHQUFHQSxRQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNO0VBQ25DLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRTtFQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRztFQUNsQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0VBQ04sRUFBRSxPQUFPLElBQUksQ0FBQztFQUNkOztFQ0pBLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7RUFDaEMsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztBQUNsQztFQUNBLE1BQU0sR0FBRyxHQUFHQyxTQUFNLENBQUMsTUFBTSxDQUFDO0VBQzFCLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztFQUNoQixHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO0VBQ3ZCLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUMxQjtBQUNBO0VBQ0EsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0VBQ1YsV0FBVyxDQUFDLE1BQU07RUFDbEIsRUFBRSxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDbEMsRUFBRSxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzdCLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7RUFDMUI7RUFDQTtFQUNBLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7RUFDZixDQUFDLEVBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQzs7OzsifQ==