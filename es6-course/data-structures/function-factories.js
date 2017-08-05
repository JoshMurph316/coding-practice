//FUNCTION FACTORY
//******************************/
const addSuffix = (x) => {
        const concat = (y) => {
            return y + x;
        }
        return concat;
    }
    //**************************/
let add_ness = addSuffix("ness");
console.log(add_ness);
let h = add_ness("happi");
console.log(h); // happiness
//**************************/
let add_ful = addSuffix("ful");
let f = add_ful('fruit');
console.log(f); // fruitful
//***********LONG VERSION**************/
const product = (x) => {
    return y => {
        return y * x;
    };
};
let mul5 = product(5);
let double = product(2);
console.log(mul5(3)); // 15
console.log(double(3)); // 6
//*####**********SHORT VERSION***********####***/
const divide = x => y => y / x;
let div5 = divide(5);
console.log(div5(50)); // 10
//**************************/
const addFactory = (x) => {
    // TODO
    // return an inner function with one parameter, y;
    return y => {
        // the inner funcion returns x + y;
        return x + y;
    };
};

const add50 = addFactory(50);
const add30 = addFactory(30);