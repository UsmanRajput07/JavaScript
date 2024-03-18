// const airplane = "indego airlines";
// const plane = "us28";

// console.log(plane[0])
// console.log(plane[1])s
// console.log(plane[2])
// console.log(plane[3])

// console.log(airplane.length);
// console.log("898u".length);

// console.log(plane.indexOf("s"))
// console.log(airplane.lastIndexOf("a"))

// console.log(airplane.indexOf("tar"))

// console.log(airplane.slice(2));
// console.log(airplane.slice(2));
// console.log(airplane.slice(airplane.lastIndexOf(" ") + 1));
// console.log(airplane.slice(-5));

function checkmiddleseat(seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("you got the middle seat");
  else {
    console.log("you are lucky");
  }
}
// checkmiddleseat("44B") 
// checkmiddleseat("44E") 
// checkmiddleseat("44A") 

//  String 2 method


const airplane = "indego airlines";
const plane = "us28";

console.log(airplane.toUpperCase())

//  fix passenger name 
const passenger = "JHon"
const passengerLower = passenger.toLowerCase();
const correctPassenger   = passenger[0].toUpperCase() + passengerLower.slice(1)
// console.log(correctPassenger)

function fixPassengerName(name){
   let correctName = name.toLowerCase();
   console.log(correctName[0].toUpperCase() + correctName.slice(1))
}
// fixPassengerName("KIlleRs")

//  Comparing email 
const email = "hello@usraj2882.io";
const loginemail = " Hello@Usraj2882.io ";

const loweremail = loginemail.toLowerCase().trim();
// console.log(loweremail)
// console.log(email === loginemail)


//  replacing 
const priceGB = "2345,66$"
const indianprice = priceGB.replace("$", "rup");
// console.log(indianprice)

const Announcement = " All passengers come to door 23. bording door 23!";
// console.log(Announcement.replace("door", "Gate"))
// console.log(Announcement.replaceAll("door", "gate"))

// Booleans 
const plane1  = "Airbus 22882rj";
// console.log(plane1.includes("28"));
// console.log(plane1.startsWith("Ai"));
// console.log(plane1.endsWith("rj"))


const checkbaggage = function(items){
  const item = items.toLowerCase();
  if(item.includes("knife")  || item.includes("gun")){
    console.log("you are not allowed in plane")
  }
  else{
    console.log("Welcome to plane")
  }
}
checkbaggage("I have a laptop some food ")
checkbaggage("I have a GUn some food ")
