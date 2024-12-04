/*
 * Anonymous Callback
 */
const operationAnon = ( (x,y, cb) => { return __(x,y) })

console.log(operationAnon(3,4, ( (x,y) __ x+y)))
console.log(operationAnon(8,6, ( (x,y) __ x*y)))
console.log(operationAnon(100,9,( (x,y) __ x%y)))

/*
 * Named Callback
 */
const operationNamed = ( (x,y,cb) => {return __(x,y)})
const add = ( (x,y) __ x+y)
const sub = ( (x,y) __ x-y)
const mul = ( (x,y) __ x*y)
const rem = ( (x,y) __ x%y)

console.log(operationNamed(1,2,add))
console.log(operationNamed(4,2,sub))
console.log(operationNamed(4,2,mul))
console.log(operationNamed(7,4,rem))
