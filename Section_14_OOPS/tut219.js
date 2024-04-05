console.log("Inheritance b/w classes");

const Person = function (firstname, birthyear) {
  (this.name = firstname), (this.birth = birthyear);
};

Person.prototype.CalcAge = function () {
  console.log(2024 - this.birth);
};
//  linking prototyping
const Student = function (firstname, birthyear, course) {
  // this.firstname = firstname,
  // this.birthyear = birthyear,
  Person.call(this, firstname, birthyear);
  this.course = course;
};
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`my name is ${this.name} and i study ${this.course}`);
};

const jhon = new Student("jhon", 2002, "bca");
jhon.CalcAge();
jhon.introduce()

console.log(jhon instanceof Student)
console.log(jhon instanceof Person)
console.log(jhon instanceof Object)

Student.prototype.contructor = Student;
console.log(Student.prototype.contructor)
