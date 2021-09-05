'use strict';
function drive(x, digits) {
    let count = 0;
    let answer = 0;
    for (let i = 0; i < digits; ++i) {
      let y = x * 3;
      let z = Math.floor(y);
      x = y - z;
      if (z === 1) {
        answer++;
      }
    }
    return 1 / (answer + 1);
  }
  
  function draw(count, digits) {
    const container = document.getElementById("app");
    const panel = new grafar.Panel(container).setAxes(["x", "y"]);
  
    const x = grafar.range(0, 1, count).select();
    //const q = grafar.range(0, 1, 2).select();
    const y = grafar.map([x], (x) => drive(x, digits));
    //const xp = grafar.map([p, q], (p, q) => Math.cos(8 * p) * q);
    //const yp = grafar.map([p, q], (p, q) => Math.sin(8 * p) * q);
  
    //grafar.pin([x, y], panel);
    grafar.pin([x, y], panel);
  }
  
  draw(1000, 100);