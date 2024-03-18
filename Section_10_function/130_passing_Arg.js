const PlaneNumber = "333DEV";
const jhon = {
  name: "nova rajput",
  passport: 2122333445,
};

const CheckIn = function (planename, passenders) {
  planename = "F23422";
  passenders.name = "Mr" + passenders.name;
  console.log(planename, passenders.name);
  if (passenders.passport === 2122333445) {
    console.log("check In");
  } else {
    console.log("Wrong passport");
  }
};
const CheckPassport = function(info){
  return  info.passport = Math.trunc(Math.random()*1E9)
}
CheckIn(PlaneNumber, jhon);
console.log(PlaneNumber, jhon);
console.log(CheckPassport(jhon))
CheckIn(PlaneNumber, jhon)