console.log("inheritance b/w classes using object.create");

const PersonObj = {
  calAge() {
    console.log(2024 - this.age);
  },
  init(name, Age) {
    this.name = name;
    this.age = Age;
  },
};

const StudentProto = Object.create(PersonObj);
StudentProto.init = function (name, age, course) {
  PersonObj.init.call(this, name, age);
  this.course = course;
};
const jhon = Object.create(StudentProto);
jhon.init("jhon", 2001, "BCA");
console.log(jhon);
jhon.calAge()
