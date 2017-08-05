const destroy = require('./basic-algorithms/seek-and-destroy');
const where = require('./basic-algorithms/where-belong')

console.log(destroy([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroy(["tree", "hamburger", 53], "tree", 53));