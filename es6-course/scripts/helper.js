// helper methods
// REPEATE
let b = `whooh${"oo".repeat(50)}`;
console.log(b);
//STARTSWITH
console.log("butterfly".startsWith("butter")); //true
console.log("butterfly".endsWith("fly")); //true
console.log("butterfly".includes("tt")); //true

// ISFINITE && ISSAFEINTEGER
const addToCart = (item, number) => {
    // return Number.isFinite(number);
    return Number.isSafeInteger(number);
}
console.log(addToCart('shirt', Infinity)); // false
console.log(addToCart('shirt', Math.pow(2, 54))); // false