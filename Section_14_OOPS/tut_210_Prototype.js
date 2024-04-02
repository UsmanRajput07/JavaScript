//  Prototypes

const person = function (name, birthyear) {
  //  instance prpoperties
  this.name = name, this.birh = birthyear
};
//  implemention
// 1 New {} Object Created
// 2 function is called , this = {}
// 3 {} linked to prototype
// 4 function automatically return {}
person.prototype.calAge = function () {
  console.log(2024 - this.birh);
};

const sahil = new person("sahil", 2001);
const aniket = new person("aniket", 2003);
const anshul = new person("anshul", "2000");

console.log(person.prototype);
sahil.calAge()
aniket.calAge();
console.log(aniket.__proto__)
console.log(aniket.__proto__ === person.prototype)


console.log(person.prototype.isPrototypeOf(sahil))
console.log(person.prototype.isPrototypeOf(person))

console.log(aniket.hasOwnProperty("name"))
console.log(aniket.hasOwnProperty("birh"))

// console.log(person.prototype.constructor);
