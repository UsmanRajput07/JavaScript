const jonas ={
    firstName: "jhon",
    lastName: "Raj",
    job: "teacher",
    birthyear: 2002,
    friends: ["Sahil", "aniket", "Anshul"],
    calcage:  function(){
      this.age = 2023-this.birthyear;
      return this.age
    },
    hasdriverlineces: true,
    summery: `${this.firstName} has ${this.age}-year old ${this.job} and he ${this.hasdriverlineces? "a" : "no"} driver liences `
}
console.log(jonas)
//  call function given parameter
// console.log(jonas.calcage(2002))

console.log(jonas.calcage())
console.log(jonas.summery)
