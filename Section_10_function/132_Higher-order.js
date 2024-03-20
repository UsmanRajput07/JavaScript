const oneWord =(str)=>{
   return  str.replaceAll(" ", "").toLowerCase();
}
const UpperFirstWord = function(str){
    const [first, ...other] = str.split(" ");
    return [first.toUpperCase(), ...other].join(" ");
}

// Higher Order function
const tranform = function(str, fn){
    console.log(`Original String:${str}`)
    console.log(`Transformed string: ${fn(str)}`)
    console.log(`Transformed by: ${fn.name}`)
}
tranform("JavaScript is the best !", UpperFirstWord)
tranform("JavaScript is the best !", oneWord)

