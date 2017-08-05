// *****Where do I belong*****

// find were the num argument fits in the array and return index
module.exports = function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort((a, b) => a - b);
    num = arr.indexOf(num);

    return num;
};

console.log(getIndexToIns([40, 60], 50));