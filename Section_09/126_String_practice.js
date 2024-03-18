
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// const flight = flights.split("+");
const getcode = (code)=> code.slice(0,3).toUpperCase(); 
for(let flight of flights.split("+")){
    const [info, from ,to, time] = flight.split(";")
    const output = `${info.startsWith("_Delayed") ? "🔴" : ""}${info.replaceAll("_", " ")} from ${getcode(from)} to ${getcode(to)} (${time.replace(":", "h")})`.padStart(44)
    console.log(output)
}