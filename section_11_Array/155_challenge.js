const ClchumanAge = function (ages) {
  const HumanAge = ages.map((cv, idx) => {
    return cv <= 2 ? 2 * cv : 16 + cv * 4;
  });
  const Adult = HumanAge.filter((cv) => cv >= 18);
  //   const Average = Adult.reduce((acc, cv) => acc + cv, 0) / Adult.length
  const Average = Adult.reduce((acc, cv, i, arr) => {
   return (acc + cv / arr.length)
  }, 0);
  console.log(HumanAge);
  console.log(Adult);
  console.log(Average);
};

ClchumanAge([5, 2, 4, 1, 15, 8, 3]);
