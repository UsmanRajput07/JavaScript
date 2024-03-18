console.log("function return from another function")

const gretting=(greate)=>{
    return greterName=(greaterName)=>{
       console.log(`${greate} to ${greaterName}`)
    }
}
const greatername = gretting("hlo")
greatername("jhon")
gretting("hi")("devid")

//--------<>----------
const greetArr = greet => name => console.log(`${greet} to ${name}`)
greetArr("hlll")("king")