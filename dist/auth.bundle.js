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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/auth.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/auth.js":
/*!************************************!*\
  !*** ./src/assets/scripts/auth.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar authBtn = document.querySelector(\".js-auth-btn\");\nvar mainBtn = document.querySelector(\".js-main-btn\");\nvar cardFront = document.querySelector(\".welcome__card-front\");\nvar cardBack = document.querySelector(\".welcome__card-back\");\n\nauthBtn.onclick = function () {\n    cardFront.style.transform = \"rotateY(180deg)\";\n\n    cardBack.style.transform = \"rotateY(360deg)\";\n    cardBack.style.opacity = \"1\";\n    authBtn.style.display = 'none';\n};\n\nmainBtn.onclick = function () {\n    cardBack.style.transform = \"rotateY(180deg)\";\n    cardFront.style.transform = \"rotateY(360deg)\";\n\n    authBtn.style.display = 'block';\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcz85ZWY0Il0sIm5hbWVzIjpbImF1dGhCdG4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtYWluQnRuIiwiY2FyZEZyb250IiwiY2FyZEJhY2siLCJvbmNsaWNrIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJvcGFjaXR5IiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxVQUFVQyxTQUFTQyxhQUFULENBQXVCLGNBQXZCLENBQWhCO0FBQ0EsSUFBTUMsVUFBVUYsU0FBU0MsYUFBVCxDQUF1QixjQUF2QixDQUFoQjtBQUNBLElBQU1FLFlBQVlILFNBQVNDLGFBQVQsQ0FBdUIsc0JBQXZCLENBQWxCO0FBQ0EsSUFBTUcsV0FBV0osU0FBU0MsYUFBVCxDQUF1QixxQkFBdkIsQ0FBakI7O0FBR0FGLFFBQVFNLE9BQVIsR0FBa0IsWUFBWTtBQUMxQkYsY0FBVUcsS0FBVixDQUFnQkMsU0FBaEIsR0FBNEIsaUJBQTVCOztBQUVBSCxhQUFTRSxLQUFULENBQWVDLFNBQWYsR0FBMkIsaUJBQTNCO0FBQ0FILGFBQVNFLEtBQVQsQ0FBZUUsT0FBZixHQUF5QixHQUF6QjtBQUNBVCxZQUFRTyxLQUFSLENBQWNHLE9BQWQsR0FBd0IsTUFBeEI7QUFFSCxDQVBEOztBQVNBUCxRQUFRRyxPQUFSLEdBQWtCLFlBQVk7QUFDMUJELGFBQVNFLEtBQVQsQ0FBZUMsU0FBZixHQUEyQixpQkFBM0I7QUFDQUosY0FBVUcsS0FBVixDQUFnQkMsU0FBaEIsR0FBNEIsaUJBQTVCOztBQUVBUixZQUFRTyxLQUFSLENBQWNHLE9BQWQsR0FBd0IsT0FBeEI7QUFDSCxDQUxEIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL2F1dGguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhdXRoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1hdXRoLWJ0blwiKTtcbmNvbnN0IG1haW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLW1haW4tYnRuXCIpO1xuY29uc3QgY2FyZEZyb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWxjb21lX19jYXJkLWZyb250XCIpO1xuY29uc3QgY2FyZEJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlbGNvbWVfX2NhcmQtYmFja1wiKTtcblxuXG5hdXRoQnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgY2FyZEZyb250LnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlWSgxODBkZWcpXCI7XG5cbiAgICBjYXJkQmFjay5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZVkoMzYwZGVnKVwiO1xuICAgIGNhcmRCYWNrLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICBhdXRoQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblxufTtcblxubWFpbkJ0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGNhcmRCYWNrLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlWSgxODBkZWcpXCI7XG4gICAgY2FyZEZyb250LnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlWSgzNjBkZWcpXCI7XG5cbiAgICBhdXRoQnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG59O1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/auth.js\n");

/***/ })

/******/ });