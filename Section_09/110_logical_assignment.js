const rest1 = {
  name: "chai",
//   numguest: 20,
  numguest: 0,
};
const rest2 = {
  name: "chapri",
  owner: "unknow",
};

//  OR Assignment opertor
// rest1.numguest = rest1.numguest || 10;
// rest2.numguest = rest2.numguest || 10;
// rest1.numguest ||= 10;
// rest2.numguest ||=10

// nullish assignment operator (null or undefine )
rest1.numguest ??=30
rest2.numguest ??=30

//  AND Assignment opertor
// rest1.owner = rest1.owner && "<ANONYMOUS>" 
// rest2.owner = rest2.owner && "<ANONYMOUS>" 
rest1.owner &&= "<ANONYMOUS>" 
rest2.owner &&= "<ANONYMOUS>" 
console.log(rest1, rest2);
