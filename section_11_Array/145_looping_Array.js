const movements = [100, 200, 450, -22, 300, -650, -134, 55];

for(const [i, movement] of movements.entries()){
    if(movement >0){
        console.log(`you deposit ${i+1}: ${movement}`)
    }
    else{
        console.log(`you withdraw ${i+1}: ${Math.abs(movement)}`)
    }
}
movements.forEach((cv,idx,arr)=>{
    if(cv >0){
        console.log(`you deposit ${idx+1}: ${cv}`)
    }
    else{
        console.log(`you withdraw ${idx}: ${Math.abs(cv)}`)
    }
})