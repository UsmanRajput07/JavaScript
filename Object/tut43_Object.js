// basic obejct 
const jonas ={
    firstName: "jhon",
    lastName: "Raj",
    job: "teacher",
    age: 2023-1990,
    friends: ["Sahil", "aniket", "Anshul"]   
}
console.log(jonas)

console.log(jonas.job)

const Name = "Name"

console.log(jonas["first" + Name ])

//  add value in obj using two methods

jonas.location = "Saharanpur"
jonas["id"] = "2323"
console.log(jonas)

// const interst = prompt("your can enter this values firstName lastname job age friends")

// if(jonas[interst]){
//     console.log(jonas[interst])
// }
// else{
//     console.log("plz select valid propertie")
// }
console.log(`${jonas.firstName } has ${jonas.friends} 3 frirnds and his best friend is called ${jonas.friends[0]}`)
