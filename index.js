//in terminal go inside a new file then do npm init -y OR npm init (the extra -y at the end auto answers yes to all the questions for u)
//then do npm install project-name OR npm i project-name (ex: npm i snake-names)
//wait for the loooong download process but dont forget the require keyword follow steps below

//require keyword to access snake-names
const snakeNames = require('snake-names')

//set var = to snakeNames.random() to randomly pick a name then log it
let namePicked= snakeNames.random()
console.log('You should name this snake: ',namePicked)

//set another var = to snakeNames.random(); this time to female snake names
let femaleSnakeNames = snakeNames.femaleRandom()
console.log('You should name this female snake: ',femaleSnakeNames)
    
//set another var = to snakeNames.random(); this time to male snake names using math.random()
let maleSnakeNames = snakeNames.male
let randomIndex = Math.floor(Math.random() * maleSnakeNames.length)
console.log('You should name this male snake:', maleSnakeNames[randomIndex])