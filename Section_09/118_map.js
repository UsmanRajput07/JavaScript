const rest = new Map();

rest
  .set("name", "rajput")
  .set("categories", ["Italian", "pizzeria", "vegetarian", "Organic"])
  .set("open", 10)
  .set("close", 12)
  .set(true, "we are open :D")
  .set(false, "we are close :(")

  const time = 10;
//   console.log(rest.get(time >= rest.get("open") && time < rest.get("close")))

//  some methods
console.log(rest.has("name"));
console.log(rest.delete("close"))
// console.log(rest.clear("close"))
// console.log(rest)
// rest.set([1,2], "test");
const arr = [1,2];
rest.set(arr, "test")
console.log(rest.get(arr))
console.log(rest.size)
