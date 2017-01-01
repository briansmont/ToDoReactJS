var moment = require('moment');

console.log(moment().format());

//Jan 1st 1970 @ 12AM -> 0
//Jan 1st 1970 @ 12:01AM -> 60

var now = moment();

console.log('current timestamp', now.unix());

//moment.js.com/docs

var timestamp = 1483311919;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMMM Do, YYYY @ h:mm:ss A'));