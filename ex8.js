function printStr(prev,curr,t){
		return new Promise((resolve,reject)=>{
		setTimeout(
			()=>{
				resolve(prev+curr)
				},
			t);
		})
}

function printAll2(){
	let str=''
	str=await printStr(str,'X')
	str=await printStr(str,'Y')
	str=await printStr(str,'Z')
	console.log(str);
}
//printAll();
setTimeout(()=>{printAll2()},5000)
//function printAll(){
//	printStr('','A',2500)
//	.then( result=>printStr(result,'B'))
//	.then( result=>printStr(result,'C'))
//	.then( result=>console.log(result))
//}

// add async to line 11:
//async function printAll2(){
