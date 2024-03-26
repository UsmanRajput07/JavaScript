console.log(23.0 === 23);
console.log(1.2 + 1.2);
console.log(0.2 + 0.2);

console.log(0.2 + 0.2 === 0.4);

// Conversion
console.log(Number("20"));
console.log(typeof +"20");

//  parsing
console.log(Number.parseInt("30px"));
console.log(Number.parseInt("e30px"));

console.log(Number.parseInt("2.5rem"));
console.log(Number.parseFloat("  2.5rem"));

//  checking if value is a NAN

console.log(Number.isNaN(20));
console.log(Number.isNaN("20"));
console.log(Number.isNaN(+"20x"));

//  checking if value is a number

console.log(Number.isFinite(20));
console.log(Number.isFinite("20"));
console.log(Number.isFinite(20 / 0));

console.log(Number.isInteger(20.0));
