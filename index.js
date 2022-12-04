const prompt = require('prompt-sync')();





function greet(namePassedIn) {
  return 'Welcome to SALT, ' + namePassedIn;
}

const name = prompt('What is your name? ');
const greeting = greet(name);



function getDateDifference(datePassedIn) {
const date1 = new Date(datePassedIn);
const date2 = new Date();
const diffTime = Math.abs(date1 - date2);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
return diffDays;
}

function start(daysleft) {
  return 'Today it is ' + daysleft + ' days left until the c ourse starts'; 
}

const course = prompt("When does that course start? ");
const starting = start(getDateDifference(course));


console.log(greeting);
console.log(starting);

module.exports.greet = greet;



