let f;
const A = function () {
  let value = 12;
  f = function () {
    console.log(value * 2);
  };
};
const B = function () {
  let value2 = 33;
  f = function () {
    console.log(value2 * 3);
  };
};
A();
f();
console.dir(f)

//<--------- re-assign F function------->
B();
f();

//  Example 
const boardpassengers = function (n, wait){
    const perGroup = n/3;
    setTimeout(function(){
        console.log(`we are now boarding all ${n} passengers`)
        console.log(`there are 3 group ,each with ${perGroup} passenger`)

    },wait *1000)
    console.log(`will start boarding in ${wait} second`)
}
boardpassengers(300, 3)

