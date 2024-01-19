//  while loop 

// let rep = 1;
// while(rep<=10){
//     console.log(`lifting weight repition ${rep}`)
//     rep++
// }

let disc = Math.trunc(Math.random() *6)+1;
while(disc !== 6){
    console.log(`you rolled a ${disc}`)
    disc = Math.trunc(Math.random() *6)+1
    if(disc === 6) console.log(`you got ${disc} `)
}