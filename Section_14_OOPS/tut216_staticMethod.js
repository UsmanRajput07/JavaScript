//  using constructor function

const person = function (name, birthyear) {
  //  instance prpoperties
  (this.name = name), (this.birh = birthyear);
};
person.hi = function () {
  console.log("hi how are you\n", this);
};

const newperson = new person("jhon", 1999);
console.log(newperson);
// newperson.hi();
person.hi();

class PerconCl {
  constructor(firstname, birthyear) {
    this.firstname = firstname;
    this.birthyear = birthyear;
  }
  //   intances function they are present in object they are create using this class
  //  method will be add to .prototype property
  CalcAge() {
    console.log(2024 - this.birthyear);
  }
  greet() {
    console.log(`hey ${this.firstname}`);
  }
  //    static function of calss
  static hay() {
    console.log("hlo there 😑");
  }
}

const jassica = new PerconCl("jassiac", 2002);
console.log(jassica);
//    can't access
//   jassica.hay()

PerconCl.hay();
