const fellowship = require('./modules');
const fetch = require('../data-structures/fetch');
const test = require('../../free-code-camp/projects/quote-machine/index');


console.log(fellowship);
//Templete Literals
let ding = 'world'
let bingo = `hello ${ding}`;
console.log(bingo);

// Sread Operator
let a = [20, 30, 40];
let b = [10, ...a, 50];
console.log(b); // [10, 20, 30, 40, 50]

// Rest Perameters
function collect(...a) {
    console.log(a);
}
collect(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]

//Descructuring
let z = [4, 5, 6];
let [four, five] = z;
console.log(four, five); // 4 5
//********* */
let king = { name: 'James', kids: 1 };
let { name, kids } = king;
console.log(name, kids); // James 1
//********* */
let son = { nameX: 'Simba', parents: 2 };
let nameX, parents;
({ nameX, parents } = son);
console.log(nameX, parents);