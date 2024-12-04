function printStr(string,t){
	return new Promise((resolve,reject)=>{
		setTimeout(
			()=>{
				console.log(string);
				resolve();
			},
			t);
	});
}
function printAll(){
	printStr('A', 2500)
	.then(()=>{
		return printStr('B',250)
		})
	.then(()=>{
		return printStr('C',25);
		})
	.catch((err)=>{
		console.log('Error:',err);
		});
}
function printAll2(){
	printStr('A', 2500)
	.then(()=>printStr('B',250))
	.then(()=>printStr('C',25))
}
printAll();
printAll2();
