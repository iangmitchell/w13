const printStr = ( (x, y) =>{
    return new Promise ( (resolve, reject)=>{
                if ( (typeof(x)=='number') && (typeof(y)=='number')){
                    resolve(x+y)
                } else {
                    reject('Enter integers only')
                }
    })
})

let s1 = printStr('A', 2).catch( (err)=> {console.log('Error', err)})

console.log( () => {
	printStr(1, 2)
		.then ( result=> result)
		.catch( e => e )
})


//var ps1 = ( ()=>{
 printStr(1, 2)
	.then( result => printStr(result, 3))
	.then( result => printStr(result, 'a'))
	.then( result => console.log(result))
	.catch( (err)=> {console.log('Error', err)})
//})

//ps1()
//
var ps2 = ( async () => {
	let s1=0
	try{
	s1 = await printStr(1,2)
	s1 = await printStr(s1,3)
	s1 = await printStr(s1,'a')
	console.log(s1)
	} catch (e) {
		console.log(e)
	}
})
ps2()
