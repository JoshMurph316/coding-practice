// Object Manipulation
let obj = { a: 'one', b: 'two', c: 'three' };
let keys = Object.keys(obj);
let values = Object.values(obj);
let entries = Object.entries(obj);
console.log(keys);
console.log(values);
console.log(entries);

for (let entry of entries) {
    console.log(`key: ${entry[0]}, value: ${entry[1]}`);
}
// Async functions
async function async_one() {
    return "one";
}
async function async_two() {
    throw new Error('Issue with asnyc!');
}
async function async_three() {
    return "three";
}
async function async_four() {
    const one = await async_one();
    console.log(one); // one
    const three = await async_three();
    console.log(three); // three
}

async_one().then(response => console.log(response)); // one
async_two().catch(error => console.log(error)); // throws an error
async_four(); // both one anf three

console.log("Don't panic error on purpose!!!!!")