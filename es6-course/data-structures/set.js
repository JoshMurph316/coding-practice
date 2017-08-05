let a = new Set();
a.add(5);
a.add(43);
a.add("bingo");
a.add({ x: 50, y: 100 });
console.log(a); // entire object a
console.log(a.size); // 4
console.log(a.has(5)); // true
//*********************/
let numbers = [5, 6, 7, 78, 98, 45];
let numSet = new Set(numbers);
for (let element of numSet.values()) {
    console.log(element);
}
//*******************************/
let chars = "sdlfjkhwpeojfrlkdfosifjldksfnsldfwe";
let chars_arr = chars.split("");
let char_set = new Set(chars_arr);
console.log(char_set);
//*******************************/
const contains = (word, letter) => {
    let letters = word.split("");
    // TODO create a set with the above 'letters' array
    let letter_set = new Set(letters)
        // TODO return whether the set has the 'letter'
    for (let element of letter_set) {
        if (letter === element) {
            return true;
        }
    }
    return false;
};

let true_check = contains("west", "e");
let false_check = contains("north", "e");

console.log(true_check);
console.log(false_check);