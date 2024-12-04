let arrayInt1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayInt2 = [10, 11, 12, 13, 14, 15];
console.log(arrayInt1.splice(3));

arrayInt1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arrayInt1.splice(4,1,arrayInt2.slice(2,4) );
console.log(arrayInt1);

arrayInt1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arrayInt1.splice(4, 0, arrayInt2.slice(3));
console.log(arrayInt1.flat());


