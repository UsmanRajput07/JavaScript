"use strict"

const person = function(name, birthyear){
    //  instance prpoperties
   this.name = name,
   this.birh = birthyear
}

//  implemention 
// 1 New {} Object Created
// 2 function is called , this = {}
// 3 {} linked to prototype
// 4 function automatically return {}
console.log(person)

const sahil = new person("sahil", 2001)
const aniket = new person("aniket", 2003)
const anshul = new person("anshul", "2000")
const Shivam = new person("Shivam", 2001)

console.log(sahil, aniket, anshul, Shivam)