console.log("Setters, getter");

//  simple object

// const Account = {
//     owner: "jassica",
//     movemets: [200, 530, 120, 300],

//     get latest(){
//       return this.movemets.slice(-1).pop()
//     },
//     set latest (item){
//        this.movemets.push(item)
//     }
// }

//  Class declartion
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
  //     property that already exists in constructor
  set firstname(name) {
    if (name.includes(' ')) this._firstname = name;
    else alert(`${name} is not a full name`);
  }
  get Age() {
    return 2024 - this.birthyear;
  }
  get fullName(){
    return this._firstname;
  }
}

const jassica = new PerconCl(("jassica Davis", 2001));
// console.log(jassica.Age)

console.log(jassica.fullName);
