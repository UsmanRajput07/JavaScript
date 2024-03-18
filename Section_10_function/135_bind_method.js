const Indego = {
  Airline: "Indego",
  Code: "Ur34L",
  booking: [],
  book(flightName, Name) {
    console.log(
      `${Name} booked a seat on ${this.Airline} flight ${this.Code} ${flightName}`
    );
    this.booking.push({ flight: `${this.Code}`, Name: `${Name}` });
  },
};
const AdaniAirline = {
  Airline: "AdaniAirline",
  Code: "AD30L",
  booking: [],
};
const vistara = {
  Airline: "vistara",
  Code: "AD30L",
  booking: [],
};

const book = Indego.book;

// const Ad56 = book.bind(AdaniAirline)
// Ad56(45, "Aniket")

const Ad56 = book.bind(AdaniAirline, 33);
const vis56 = book.bind(vistara);
Ad56("shivam");
Ad56("aniket");

// const Ad56 = book.bind(AdaniAirline, 33, "aniket")
// Ad56();

console.log(AdaniAirline);

//  html test

Indego.planes = 200;
Indego.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// Indego.buyPlane();

// document.querySelector(".buy").addEventListener("click", Indego.buyPlane.bind(Indego) )

// Partical Application

// const addtax = (rate, value)=> value + value *rate
// console.log(addtax(0.1, 100))

// const addVAT = addtax.bind(null, 0.23)
// console.log(addVAT(23))

//  higher order function
const addtax = (rate) => {
  return function(value) {
     return value + value * rate;
  };
};
const AddVat = addtax(0.23);
console.log(AddVat(10))
console.log(AddVat(100))
