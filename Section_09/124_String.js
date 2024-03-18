//  Split and join method
console.log("A+hello+how+are+you".split("+"))
const [firstname, lastname] = ("Usman Ahmad".split(" "))
const newname = ["mr.", firstname, lastname.toUpperCase()].join(" ");
console.log(newname)

const capitalizeName = (name)=>{
    const names = name.split(" ")
    const newname =[];
    for(let n of names){
    //   newname.push(n[0].toUpperCase() + n.slice(1))
    newname.push(n.replace(n[0], n[0].toUpperCase()))

    }
    console.log(newname.join(" "))
}
capitalizeName("jhon and rehana")

// padding
const Msg = "go to the gate 20";
// padding start

// console.log(Msg.padStart(23, "*"))
// console.log("jhon".padStart(10, "!"))
//  padding end

// console.log(Msg.padEnd(20, "$"))
// console.log("jhon".padEnd(15, "#"))

const MaskAadhar = function(number){
   const no = number + "";
   const maskNo =  no.slice(-4)
    return maskNo.padStart(no.length , "*")
}
console.log(MaskAadhar(2333257689));
console.log(MaskAadhar(23332645474754));
console.log(MaskAadhar(23332645474777));

// repeat 
const message = "go to the gate 23\n";
console.log(message.repeat(5))

const planeLines = function(n){
    console.log(`the plane ${n}  and lines ${"🚀".repeat(n)}`)
}

planeLines(4);
planeLines(3)