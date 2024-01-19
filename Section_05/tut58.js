"use strict";

const temprature = [-8, -6, -2, 1, 2, 3, 5, "error", 7, 8, 2, 17, 22, 44];

const calctempamplitude = function (temps) {
  let max = temps[0];
  let min = temps[0]
  for (let i = 0; i < temps.length; i++) {
    let curtemp = temps[i];
    if( typeof curtemp !== "number") continue


    if (curtemp > max) max = curtemp;
    if (curtemp < min) min = curtemp;
  }
  console.log(max, min);
};
calctempamplitude([1, 4, 7, 9, 4]);
