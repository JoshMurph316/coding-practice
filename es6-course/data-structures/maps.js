let a = new Map();

let key_1 = "string key";
let key_2 = { a: 'key' };
let key_3 = function() {};

a.set(key_1, "return value for a string key");
a.set(key_2, "return value for a obect key");
a.set(key_3, "return value for a function key");
console.log(a);
//************************/
let numArr = [
    [1, 'one'],
    [2, 'two'],
    [3, 'three']
];
let valMap = new Map(numArr);
console.log(valMap);
for (let [key, value] of valMap.entries()) {
    console.log(`${key} points to ${value}`)
}
//************************/
let strg = "laksdjlaksndlknnsdjnfkjsdnf kvjrnlwmefclm";

let letters = new Map();
for (let i = 0; i < strg.length; i++) {
    let letter = strg[i];
    if (!letters.has(letter)) {
        letters.set(letter, 1);
    } else {
        letters.set(letter, letters.get(letter) + 1);
    }
}
console.log(letters);
//****************************************/
let string = 'supercalifragilisticexpialidocious';

const countLetter = (word, orig_letter) => {
    // TODO Create a map called 'letters'
    let letters = new Map();
    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        if (!letters.has(letter)) {
            // TODO set the letter in the map to 1
            letters.set(letter, 1)
        } else {
            // TODO update the value of letter in letters to its value + 1
            letters.set(letter, letters.get(letter) + 1);
        }
    }
    return letters.get(orig_letter);
};

let a_count = countLetter(string, 'a');
let x_count = countLetter(string, 'x');

console.log(a_count);
console.log(x_count);