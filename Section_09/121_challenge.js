
const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
  ]);

//   console.log(gameEvents.entries())
// 1
//  const events = [...new Set(gameEvents.values())]
//  console.log(...events.entries())

//  2
console.log(gameEvents.delete(64))

// 3
console.log(`An events happend on Average , every ${90/gameEvents.size}`)
// console.log(gameEvents.size)
const time = [...gameEvents.keys()].pop();
console.log(time)
console.log(`An events happend on Average , every ${time/gameEvents.size} `)
//  4

for(const [min, event] of gameEvents){
    const half = min <=45 ? "First" : "Second"
    console.log(`[${half} half] ${min}: ${event}`)
}