class car {
  constructor(name, speed) {
    (this.carname = name), (this.speed = speed);
  }
  set speedUS(speed) {
   return this.speed = speed * 1.6;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
}
const ford = new car("ford", 120)
console.log(ford.speedUS)
console.log(ford.speedUS=50)
