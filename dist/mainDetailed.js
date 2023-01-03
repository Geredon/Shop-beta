/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCatalogFetch\": () => (/* binding */ getCatalogFetch),\n/* harmony export */   \"getDetailedFetch\": () => (/* binding */ getDetailedFetch)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ \"./src/constants.js\");\n\r\n\r\nasync function  getCatalogFetch() {\r\n    const mainFetch = await fetch(_constants_js__WEBPACK_IMPORTED_MODULE_0__.mainUrl + '/item')\r\n    .then(response => response.json())\r\n    return mainFetch;\r\n};\r\n    \r\nasync function getDetailedFetch(id) {\r\n    const detailedFetch = await fetch(_constants_js__WEBPACK_IMPORTED_MODULE_0__.mainUrl + '/item/' + id)\r\n    .then(response => response.json())\r\n    return detailedFetch;\r\n};\n\n//# sourceURL=webpack://shop-beta/./src/api.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mainUrl\": () => (/* binding */ mainUrl)\n/* harmony export */ });\nconst mainUrl = \"http://127.0.0.1:3006/\";\n\n//# sourceURL=webpack://shop-beta/./src/constants.js?");

/***/ }),

/***/ "./src/mainDetailed.js":
/*!*****************************!*\
  !*** ./src/mainDetailed.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/api.js\");\n/* harmony import */ var _render_pages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-pages.js */ \"./src/render-pages.js\");\n\r\n\r\n\r\nlet url = new URL(location.href);\r\n\r\nasync function initDetailed() {\r\n    const response = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getDetailedFetch)(url.searchParams.get(\"id\"));\r\n    let dataDetailed = response.content;\r\n    (0,_render_pages_js__WEBPACK_IMPORTED_MODULE_1__.renderDetailed)(dataDetailed);\r\n}\r\n\r\ninitDetailed()\n\n//# sourceURL=webpack://shop-beta/./src/mainDetailed.js?");

/***/ }),

/***/ "./src/render-pages.js":
/*!*****************************!*\
  !*** ./src/render-pages.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderCataloc\": () => (/* binding */ renderCataloc),\n/* harmony export */   \"renderDetailed\": () => (/* binding */ renderDetailed)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ \"./src/constants.js\");\n\r\n\r\nfunction renderCataloc(dataCatalog) {\r\n    let productsItem = document.querySelector(\".products-item\");\r\n    productsItem.innerHTML +=\r\n    dataCatalog.map(content => \r\n            `\r\n            <li class=\"product\">\r\n                <a target=\"_blank\" href=\"detailed-page.html?id=${content.id}\"  class=\"product-link\">\r\n                    <div class=\"product-favorite\">\r\n                        <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                            <path d=\"M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z\" fill=\"#none\"/>\r\n                        </svg>\r\n                    </div>\r\n                    <div class=\"product-img\">\r\n                        <div class=\"wrapper-img\">\r\n                            <img src=\"${_constants_js__WEBPACK_IMPORTED_MODULE_0__.mainUrl}${content.picture.path}\" alt=\"${content.picture.alt}\">\r\n                        </div>\r\n                    </div>\r\n                    <p class=\"product-title\">\r\n                       ${content.name}\r\n                    </p>\r\n                    <p class=\"product-price\">\r\n                        ${content.price.currency} ${Math.floor(content.price.value)}\r\n                    </p>\r\n                </a>\r\n            </li>\r\n            `\r\n        ).join(\" \")  \r\n};\r\n\r\nfunction renderDetailed(dataDetailed) {\r\n    let cardPrice = document.querySelector(\".card-price\");\r\n    let detailedProduct =document.querySelector(\".detailed-product\");\r\n    let detailedDescription = document.querySelector(\".detailed-description\");\r\n    detailedProduct.innerHTML +=\r\n        `\r\n        <h3 class=\"detailes-name\">${dataDetailed.name}</h3>\r\n        <p>${dataDetailed.description} ${dataDetailed.info}</p>\r\n        `\r\n    cardPrice.innerHTML +=\r\n        `\r\n        <p>${dataDetailed.price.currency}${dataDetailed.price.value}</p>\r\n        `\r\n    detailedDescription.innerHTML +=\r\n        `\r\n        <h5>Details</h5>\r\n        <p>${dataDetailed.details}</p>\r\n        `     \r\n};\n\n//# sourceURL=webpack://shop-beta/./src/render-pages.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/mainDetailed.js");
/******/ 	
/******/ })()
;