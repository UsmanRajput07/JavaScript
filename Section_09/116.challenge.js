// challenge 2
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
//   1

// for(const [score, players] of game.scored.entries()){
//   console.log(`Goal ${score+1} of ${players}`)
// }

// 2
// let Average = null;
// const length = Object.values(game.odds).length
// console.log(length)

// for(const odds of Object.values(game.odds)){
//    Average += odds 
// }
// Average /= length

// console.log(Average)

// 3
for(const [team ,odds] of Object.entries(game.odds)){
    const teamStr = team === "x" ? "draw": `victory ${game[team]}`

    console.log(`Odd of ${teamStr} ${odds}`)
}
