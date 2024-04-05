/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  (this.make = make), (this.speed = speed);
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(
    `${this.make} going at ${this.speed} km/h`
  );
};

Car.prototype.break = function () {
  this.speed -= 5;
  console.log(
    `${this.make} going at ${this.speed} km/h`
  );
};
const Ev = function (make, speed,charge) {
  Car.call(this, make, speed);
  this.chargeTo = charge
};
//  linking prototype
Ev.prototype = Object.create(Car.prototype)

Ev.prototype.chargeBattery = function(charge){
  this.chargeTo = charge
}
Ev.prototype.accelerate = function(){
  this.speed += 20;
  this.chargeTo --;
  console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.chargeTo}`)
}

const tesla = new Ev("tesla", 120, 1)
tesla.chargeBattery(89)
// console.log(tesla)
tesla.accelerate()
tesla.break()

