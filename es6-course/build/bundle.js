/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const fellowship = __webpack_require__(1);
const fetch = __webpack_require__(2);

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

/***/ }),
/* 1 */
/***/ (function(module, exports) {

const fellowship = ['Frodo', 'Sam', 'Gandalf'];

module.exports = fellowship;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// fetching POST from https://jsonplaceholder.typicode.com/posts/1

const root = 'https://jsonplaceholder.typicode.com/posts/1';

module.exports = fetch(root, { method: "GET" })
    .then(response => response.json())
    .then(json => console.log(json));

/***/ })
/******/ ]);