const moment = require('moment');

// var date = new Date();

// console.log(date.getMonth());

// var date = moment();
// console.log(date.format('Do MMM, YYYY'));

var createdAt = new Date().getTime();

var date = moment(createdAt);
console.log(date.format('h:mm a'));


var someTimestamp = moment().valueOf();
console.log(someTimestamp);