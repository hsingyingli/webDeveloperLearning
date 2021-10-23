// module

const greeting = require("./lib/greeting.js");

greeting();

const average = require("./lib/school.js").average;
console.log(average([1, 2, 3, 4]));

console.log(require('./lib/school.js').grades);

