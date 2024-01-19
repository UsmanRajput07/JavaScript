const mark={
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function(){
     this.BMI =  this.mass/ (this.height* this.height)
   return this.BMI
  },
 }
 const john={
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function(){
      this.BMI = this.mass/ (this.height* this.height)
      return this.BMI
  },
 }
 john.BMI>mark.BMI? console.log(`${john.fullName} BMI ${john.calcBMI()} is higher than ${mark.fullName} ${mark.calcBMI()}`): 
 console.log(`${mark.fullName} BMI ${mark.calcBMI()} is higher than ${john.fullName} ${john.calcBMI()}`)
 