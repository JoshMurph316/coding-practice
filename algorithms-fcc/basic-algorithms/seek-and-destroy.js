// *****Seek and destroy function*****

// remove all array elements that match additional arguments
module.exports = function destroy(arr) {

    // loop thru and collect args
    var argsArray = [];

    for (var i = 1; i < arguments.length; i++) {
        argsArray.push(arguments[i]);
    }
    for (var x = 0; x < argsArray.length; x++) {
        // remove elements from initial array
        arr = arr.filter(num => num !== argsArray[x]);
    }
    return arr + " removed " + argsArray;
};