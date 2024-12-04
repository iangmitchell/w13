function printStr(prev,curr,t,cb){
		setTimeout(
			()=>{
				cb((prev+curr))
				},
			t);
}
function printAll(){
	printStr('','A',2500,result=>{
		printStr(result,'B',250,result=>{
			printStr(result,'C',25,result=>{	
				console.log(result)
				})
			})
		})
}
printAll();
