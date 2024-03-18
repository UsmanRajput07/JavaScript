const Indego = {
  Airline: "Indego",
  Code: "Ur34L",
  booking: [],
  book(flightName, Name) {
    console.log(
      `${Name} booked a seat on ${this.Airline} flight ${this.Code} ${flightName}`
    );
    this.booking.push({ flight: `${this.Code}`, Name:`${Name}` });
  },
};
Indego.book(332, "Usman Ahmad");
// console.log(Indego)
const AdaniAirline = {
  Airline: "AdaniAirline",
  Code: "AD30L",
  booking: [],
};

const book = Indego.book;
// not work
// book.(AdaniAirline, 233, "sahil");
// book.call(AdaniAirline, 233, "sahil");
book.call(AdaniAirline, 233, "sahil");
console.log(AdaniAirline)


// <=============Apply Method================>
// Apply method take a  arry as a arrgumnet

const ApplyArrMethod = [235, "Shivam"]
book.apply(AdaniAirline, ApplyArrMethod)
console.log(AdaniAirline)

book.call(AdaniAirline, ...ApplyArrMethod)
