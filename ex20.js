
const fs = require('fs');
var jsonFile = fs.readFileSync('SimpleToken.json'); //read the file synchronously
console.log("==========start read===============");
var myObj = JSON.parse(jsonFile);
console.log("========== end read ===============");

console.log("==========start mid===============");
var mid = myObj.data.methodIdentifiers;
console.log(mid)
console.log("========== end mid===============");
