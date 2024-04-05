//  Class expression
// const personCl = class {

// }

//  Class declartion
class PerconCl {
  constructor(firstname, birthyear) {
    this.firstname = firstname;
    this.birthyear = birthyear;
  }
  //  method will be add to .prototype property
  CalcAge() {
    console.log(2024 - this.birthyear);
  }
  greet() {
    console.log(`hey ${this.firstname}`);
  }
}
const jassica = new PerconCl("jessica", 2000);
console.log(jassica.__proto__);
jassica.CalcAge();

//  we can
// PerconCl.prototype.greet = function(){
//  console.log(`hey ${this.firstname}`)
// }

jassica.greet();

// important
// 1 classes are not hoisted
// 2 classes are first class citizes
// 3 clasees are excuted in strict mode