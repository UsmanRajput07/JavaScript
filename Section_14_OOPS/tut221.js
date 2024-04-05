console.log("implenting prototyping chain using ES6");

class PerconCl {
  constructor(firstname, birthyear) {
    this.firstname = firstname;
    this.birthyear = birthyear;
  }
  //  method will be add to .prototype property
  CalcAge() {
    console.log(2024 - this.birthyear);
  }
  greet() {
    console.log(`hey ${this.firstname}`);
  }
}

// class Student extends PerconCl {
//   /* if you dont need  any new property in Student class then no need for calling constructor or super as well
//    */
// }

class Student extends PerconCl {
  constructor(firstname, birthyear, course) {
    //  first call super then add new property
    super(firstname, birthyear);
    this.course = course;
  }
  //    when we are creating a same function in child then the prorety Will be child function
  CalcAge() {
    console.log(`I am ${2024 - this.birthyear} year old`);
  }
}
const jhon = new Student("jhon", 2001, "BCA");

console.log(jhon);
jhon.CalcAge()