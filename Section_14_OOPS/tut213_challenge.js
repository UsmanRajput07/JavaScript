
/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const CAR = function(make, speed){
  this.make = make;
  this.speed = speed
}

CAR.prototype.accelerate = function(){
    console.log(this.speed +10)
}
CAR.prototype.break = function(){
    console.log(this.speed -5)
}

const CAR1 = new CAR("BMW", 120)
const CAR2 = new CAR("mercedes", 95)
console.log(CAR1, CAR2)

CAR1.accelerate()
CAR2.accelerate()
CAR2.accelerate()
CAR1.break()
CAR1.break()