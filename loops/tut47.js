const john = ["jonas", "Schemeth", 2023-2002, "teacher", ["sahil", "aniket", "Shivam", "anshul"]]

const types =[]

for(let i=0; i<john.length; i++){
    // console.log(john[i])
   
    // filling the types of john in types array 

    // types[i] = typeof john[i]

    // another way
    types.push(typeof john[i])

}
console.log(types)


// const years =[2002, 2000, 2001, 2004, 2007];
// const ages =[];
// for(let i =0; i<years.length; i++){
//     ages.push(2023-years[i])
// }
// console.log(ages)

//   <-------------- continue and break statement----------->
console.log("<-------------only string------->")
for(let i=0; i<john.length; i++){
    if(typeof john[i] !== "string") continue;
    console.log(john[i], typeof john[i])
}

// console.log("<-------------only Number------->")
for(let i=0; i<john.length; i++){
    if(typeof john[i] === "number") break;
    console.log(john[i], typeof john[i])
}

