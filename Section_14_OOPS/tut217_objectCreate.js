const PersonObj = {
    calAge(){
        console.log(2024- this.age)
    },
    init(name, Age){
      this.name = name ;
      this.age = Age;
    }
}

// jassica.firstName = "jassica"
// jassica.Age =  2002
  
const jassica = Object.create(PersonObj)
console.log(jassica.init("jessica", 2001))
console.log(jassica.__proto__)
jassica.calAge()