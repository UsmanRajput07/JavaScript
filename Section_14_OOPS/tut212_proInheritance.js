console.log("prototypal Inheritance");
const person = function (name, birthyear) {
  //  instance prpoperties
  (this.name = name), (this.birh = birthyear);
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

console.log(sahil.__proto__)

// object prototype (top of prototype chain)
console.log(sahil.__proto__.__proto__)
console.log(sahil.__proto__.__proto__.__proto__)

const arr = [1,2,3,4,5,6,7,99999, 9, 8, 3, 8,9];
console.dir(arr.__proto__)
console.log(arr.__proto__.__proto__)

// set  unique function to arr prototype
//  its way not used is big projext its a bad practices
Array.prototype.unique = function(){
    return [...new Set(this)]
}
console.log(arr.unique())

const h1 = document.querySelector("h1")
console.dir(h1)


