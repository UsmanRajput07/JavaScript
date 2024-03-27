console.log("set a interlization")
const num = new Date();

console.log("US: " , new Intl.DateTimeFormat("en-US").format(num))
console.log("Germany: " , new Intl.DateTimeFormat("de-DE").format(num))
console.log("syria: " , new Intl.DateTimeFormat("ar-Sy").format(num))

//  navigator.language run onlye is browser console
console.log(navigator.language, new Intl.DateTimeFormat(navigator.language).format(num))