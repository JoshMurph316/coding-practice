// Arrow Functions
let start = () => console.log("Start!")
start();
setTimeout(() => console.log('TIME!'), 2000);
//********************/
//arrow functions MAP helper
let values = [20, 30, 40];
let double = n => n * 2;
let doubled = values.map(double);
console.log(doubled);
//**********************/
//arrow functions FILTER helper
let points = [7, 2, 34, 65, 23, 12, 5];
let highScores = points.filter(n => n > 15);
console.log(highScores);

//**********************/