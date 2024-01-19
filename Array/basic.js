// basic array

const friends = ["sahil", "aniket", "nitien"];

// another method to declare arrr

const arr = new Array("friend1", "friend2", "friend3");

// console.log(friends, arr);

const Calcage =function(birthyear){
    return 2023 -birthyear
} 
const years =[2002, 2003, 2001, 2005, 2010];

const ages = [Calcage(years[0]), Calcage(years[1]), Calcage(years[years.length-1])]

console.log(ages)

