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

var levelTest = __webpack_require__(1);
var Level = __webpack_require__(2);



var gameApp = function() {
  var levelOne = new Level(levelTest);
  console.log("Test is working");
}

window.addEventListener('load', gameApp);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var levelTest = [
"                ",
"                ",
"                ",
"                ",
"xxxxxxxxxxxxxxxx",
"                ",
"                ",
"                ",
"                "
]

module.exports = levelTest;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var Level = function(plan) {
  this.width = plan[0].length;
  this.height = plan.length;
  this.startPoint = [0, 0];
  var map = [[0, 0]];

  var yArray = [];
  var xArray = [];

  for (var y = 0; y < this.height; y++) {
    var yCoord = this.startPoint[1] += 80;
    yArray.push(yCoord);
    for (var x = 0; x < this.height; x++) {
      var xCoord = this.startPoint[1] += 80;
      xArray.push(xCoord);
    }
  }



  for (var yElement of yArray) {
    for (var xElement of xArray) {
      var coord = [xElement, yElement]
      map.push(coord);
    }
  }

  // for (var y = 0; y < this.height; y++) {
  //   this.startPoint[1] += 80;
  //   for (var x = 0; x < this.width; x++) {
  //     this.startPoint[0] += 80;
  //     this.map.push(this.startPoint);
  //   }
  //   this.map.push(this.startPoint);
  //   this.startPoint[0] = 0; 
  // }

   console.log(map);
}

module.exports = Level;



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map