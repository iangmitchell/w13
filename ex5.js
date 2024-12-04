function printStr(string){
	setTimeout(
		()=>{
			console.log(string)
		},
		5000);
}
function printAll(){
	printStr('A');
	printStr('B');
	printStr('C');
	}
printAll();
