// const birthYear = prompt('Enter your birth year:');
// let age = 2019 - parseInt(birthYear);
// let message = 'Your age is: '+ age;
// alert(message);


// const hourWage = prompt('Enter your hour wage:');
// const hours = prompt('How many hours per day did you work:');
// const days = prompt('How many days in a month did you work:');
// document.write(parseInt(hourWage*hours*days));

// const amountOfEuros = prompt('How many euros do you want to change?');
// const roundedCrows = Math.round(amountOfEuros*25.695);
// document.write("you will get: ",parseInt(roundedCrows)," CZK");

// const programmingHours =[5,4,4,5,3,2,0];
// console.log(programmingHours[6]);
// const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
// daysOfTheWeek.push("Saturday","Sunday");
// console.log(daysOfTheWeek);
// console.log(daysOfTheWeek[0]);
// console.log(daysOfTheWeek.length);

// const chessboard = [[5,0,0,0,0,0,0,0], [0,0,0,0,0,1,0,0], [0,0,0,0,0,1,0,1], [0,0,0,0,0,1,1,3], [0,0,0,0,0,0,1,6], [0,0,0,0,3,0,2,1], [0,0,0,0,0,0,0,1], [0,0,0,0,0,0,6,0]];
// chessboard[4][7] = 0;
// chessboard[1][0] = 6;
// console.table(chessboard);

const cards = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];

const rankIndex = Math.floor(Math.random()*13);
const rankSuits = Math.floor(Math.random()*4);
document.write(cards[rankIndex], " of ",suits[rankSuits]);
