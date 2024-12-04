
const fs = require('fs');

const displayFileContent = (()__ { 
	fs.readFile('./SimpleToken.json', 'utf8', (error, data) =>{
	if(_____){
		console.log(error);
		return;}

	console.log(JSON.parse(data));
_)
_)
console.log("==========start===============");
__________________();
console.log("========== end ===============");

var jsonFile = fs.readFileSync('SimpleToken.json'); 
console.log("==========start===============");
console.log(JSON._____(jsonFile)) 
console.log("========== end ===============");
var newJSONfile = fs.writeFileSync('./CopySimpleToken.json', jsonFile, 'utf8');
var serialisedJSONfile = fs.writeFileSync('./SerialisedSimpleToken.json', JSON._________(jsonFile), 'utf8');
