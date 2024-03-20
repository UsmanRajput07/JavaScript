const currencies = new Map([
    ["USD", "united states doller"],
    ["EUR", "Euro"],
    ["GBp", "pound sterling"]
])

currencies.forEach((cv,idx,arr)=>{
    console.log(`key ${idx} value ${cv}`)
})

const currencies2 = new Set(["USD", "RUPAY", "EURO", "EURO", "USD"])
currencies2.forEach((cv,idx,arr)=>{
  console.log(`${cv}`)
})