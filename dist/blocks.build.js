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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit__ = __webpack_require__(/*! ./edit */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__save__ = __webpack_require__(/*! ./save */ 9);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style_scss__);\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\n\n\n\n\n\n\nregisterBlockType(\"cgb/block-fnuggapi\", {\n\ttitle: __(\"Hva med nå? Fnugg\"),\n\ticon: \"smiley\",\n\tcategory: \"common\",\n\tkeywords: [__(\"fnuggapi — CGB Block\"), __(\"CGB Example\"), __(\"create-guten-block\")],\n\tattributes: {\n\t\tresortOptions: {\n\t\t\ttype: \"object\",\n\t\t\tdefault: {\n\t\t\t\tPicture: false,\n\t\t\t\t\"Weather Conditions\": false,\n\t\t\t\tTemperature: false,\n\t\t\t\tWind: false,\n\t\t\t\tSnow: false,\n\t\t\t\t\"Opening Hours\": false\n\t\t\t}\n\t\t},\n\n\t\tresortName: {\n\t\t\ttype: \"string\",\n\t\t\tdefault: \"Resort\"\n\t\t}\n\t},\n\n\tedit: __WEBPACK_IMPORTED_MODULE_0__edit__[\"a\" /* default */],\n\tsave: __WEBPACK_IMPORTED_MODULE_1__save__[\"a\" /* default */]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfXyA9IHdwLmkxOG4uX187IC8vIEltcG9ydCBfXygpIGZyb20gd3AuaTE4blxuXG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7IC8vIEltcG9ydCByZWdpc3RlckJsb2NrVHlwZSgpIGZyb20gd3AuYmxvY2tzXG5cbmltcG9ydCBFZGl0IGZyb20gXCIuL2VkaXRcIjtcbmltcG9ydCBTYXZlIGZyb20gXCIuL3NhdmVcIjtcblxuaW1wb3J0IFwiLi9lZGl0b3Iuc2Nzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKFwiY2diL2Jsb2NrLWZudWdnYXBpXCIsIHtcblx0dGl0bGU6IF9fKFwiSHZhIG1lZCBuw6U/IEZudWdnXCIpLFxuXHRpY29uOiBcInNtaWxleVwiLFxuXHRjYXRlZ29yeTogXCJjb21tb25cIixcblx0a2V5d29yZHM6IFtfXyhcImZudWdnYXBpIOKAlCBDR0IgQmxvY2tcIiksIF9fKFwiQ0dCIEV4YW1wbGVcIiksIF9fKFwiY3JlYXRlLWd1dGVuLWJsb2NrXCIpXSxcblx0YXR0cmlidXRlczoge1xuXHRcdHJlc29ydE9wdGlvbnM6IHtcblx0XHRcdHR5cGU6IFwib2JqZWN0XCIsXG5cdFx0XHRkZWZhdWx0OiB7XG5cdFx0XHRcdFBpY3R1cmU6IGZhbHNlLFxuXHRcdFx0XHRcIldlYXRoZXIgQ29uZGl0aW9uc1wiOiBmYWxzZSxcblx0XHRcdFx0VGVtcGVyYXR1cmU6IGZhbHNlLFxuXHRcdFx0XHRXaW5kOiBmYWxzZSxcblx0XHRcdFx0U25vdzogZmFsc2UsXG5cdFx0XHRcdFwiT3BlbmluZyBIb3Vyc1wiOiBmYWxzZVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRyZXNvcnROYW1lOiB7XG5cdFx0XHR0eXBlOiBcInN0cmluZ1wiLFxuXHRcdFx0ZGVmYXVsdDogXCJSZXNvcnRcIlxuXHRcdH1cblx0fSxcblxuXHRlZGl0OiBFZGl0LFxuXHRzYXZlOiBTYXZlXG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!********************************!*\
  !*** external "wp.components" ***!
  \********************************/
/*! dynamic exports provided */
/*! exports used: CheckboxControl, PanelBody, RadioControl, TextControl */
/***/ (function(module, exports) {

module.exports = wp.components;

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 0);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!***************************!*\
  !*** ./src/block/edit.js ***!
  \***************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_blockControls_jsx__ = __webpack_require__(/*! ./components/blockControls.jsx */ 11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n\n\n\nvar Edit = function Edit(_ref) {\n\tvar _ref$attributes = _ref.attributes,\n\t    resortOptions = _ref$attributes.resortOptions,\n\t    resortName = _ref$attributes.resortName,\n\t    setAttributes = _ref.setAttributes,\n\t    className = _ref.className;\n\tvar _wp$element = wp.element,\n\t    useEffect = _wp$element.useEffect,\n\t    useState = _wp$element.useState;\n\n\t//local state for the autocomplete results from the api\n\n\tvar _useState = useState([]),\n\t    _useState2 = _slicedToArray(_useState, 2),\n\t    resorts = _useState2[0],\n\t    setResorts = _useState2[1];\n\n\t//local state for keeping track of the search-query\n\n\n\tvar _useState3 = useState(\"\"),\n\t    _useState4 = _slicedToArray(_useState3, 2),\n\t    resortQuery = _useState4[0],\n\t    setResortQuery = _useState4[1];\n\n\t//fetching the different resorts with autocomplete\n\n\n\tuseEffect(function () {\n\t\tresortQuery.length !== 0 ? fetch(\"https://api.fnugg.no/suggest/autocomplete?q=\" + resortQuery).then(function (response) {\n\t\t\treturn response.json();\n\t\t}).then(function (data) {\n\t\t\tsetResorts([].concat(_toConsumableArray(data.result)).map(function (resort) {\n\t\t\t\treturn resort.name;\n\t\t\t}));\n\t\t}).catch(function (error) {\n\t\t\treturn console.error(error.message);\n\t\t}) : null;\n\t\treturn function () {\n\t\t\treturn;\n\t\t};\n\t}, [resortQuery]);\n\treturn wp.element.createElement(\n\t\t\"div\",\n\t\t{ className: className },\n\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__components_blockControls_jsx__[\"a\" /* default */], {\n\t\t\tresortOptions: resortOptions,\n\t\t\tresortQuery: resortQuery,\n\t\t\tsetAttributes: setAttributes,\n\t\t\tsetResortQuery: setResortQuery,\n\t\t\tresorts: resorts,\n\t\t\tresortName: resortName\n\t\t})\n\t);\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Edit);\n\n/* \tconst createResortWidget = async (resortQuery) => {\n\t\tconst encodedResortName = encodeURI(resortQuery);\n\t\tconst response = await fetch(\n\t\t\t`https://api.fnugg.no/search?q=${encodedResortName}`\n\t\t);\n\t\tconst data = await response.json();\n\t\tconsole.log(data);\n\t}; *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0LmpzPzNmZTEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9zbGljZWRUb0FycmF5ID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH0gfTsgfSgpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuaW1wb3J0IEJsb2NrQ29udHJvbHMgZnJvbSBcIi4vY29tcG9uZW50cy9ibG9ja0NvbnRyb2xzLmpzeFwiO1xuaW1wb3J0IFwiLi9lZGl0b3Iuc2Nzc1wiO1xuXG52YXIgRWRpdCA9IGZ1bmN0aW9uIEVkaXQoX3JlZikge1xuXHR2YXIgX3JlZiRhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuXHQgICAgcmVzb3J0T3B0aW9ucyA9IF9yZWYkYXR0cmlidXRlcy5yZXNvcnRPcHRpb25zLFxuXHQgICAgcmVzb3J0TmFtZSA9IF9yZWYkYXR0cmlidXRlcy5yZXNvcnROYW1lLFxuXHQgICAgc2V0QXR0cmlidXRlcyA9IF9yZWYuc2V0QXR0cmlidXRlcyxcblx0ICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lO1xuXHR2YXIgX3dwJGVsZW1lbnQgPSB3cC5lbGVtZW50LFxuXHQgICAgdXNlRWZmZWN0ID0gX3dwJGVsZW1lbnQudXNlRWZmZWN0LFxuXHQgICAgdXNlU3RhdGUgPSBfd3AkZWxlbWVudC51c2VTdGF0ZTtcblxuXHQvL2xvY2FsIHN0YXRlIGZvciB0aGUgYXV0b2NvbXBsZXRlIHJlc3VsdHMgZnJvbSB0aGUgYXBpXG5cblx0dmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKFtdKSxcblx0ICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuXHQgICAgcmVzb3J0cyA9IF91c2VTdGF0ZTJbMF0sXG5cdCAgICBzZXRSZXNvcnRzID0gX3VzZVN0YXRlMlsxXTtcblxuXHQvL2xvY2FsIHN0YXRlIGZvciBrZWVwaW5nIHRyYWNrIG9mIHRoZSBzZWFyY2gtcXVlcnlcblxuXG5cdHZhciBfdXNlU3RhdGUzID0gdXNlU3RhdGUoXCJcIiksXG5cdCAgICBfdXNlU3RhdGU0ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlMywgMiksXG5cdCAgICByZXNvcnRRdWVyeSA9IF91c2VTdGF0ZTRbMF0sXG5cdCAgICBzZXRSZXNvcnRRdWVyeSA9IF91c2VTdGF0ZTRbMV07XG5cblx0Ly9mZXRjaGluZyB0aGUgZGlmZmVyZW50IHJlc29ydHMgd2l0aCBhdXRvY29tcGxldGVcblxuXG5cdHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG5cdFx0cmVzb3J0UXVlcnkubGVuZ3RoICE9PSAwID8gZmV0Y2goXCJodHRwczovL2FwaS5mbnVnZy5uby9zdWdnZXN0L2F1dG9jb21wbGV0ZT9xPVwiICsgcmVzb3J0UXVlcnkpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRcdHNldFJlc29ydHMoW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShkYXRhLnJlc3VsdCkpLm1hcChmdW5jdGlvbiAocmVzb3J0KSB7XG5cdFx0XHRcdHJldHVybiByZXNvcnQubmFtZTtcblx0XHRcdH0pKTtcblx0XHR9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcblx0XHRcdHJldHVybiBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xuXHRcdH0pIDogbnVsbDtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH07XG5cdH0sIFtyZXNvcnRRdWVyeV0pO1xuXHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFwiZGl2XCIsXG5cdFx0eyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LFxuXHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChCbG9ja0NvbnRyb2xzLCB7XG5cdFx0XHRyZXNvcnRPcHRpb25zOiByZXNvcnRPcHRpb25zLFxuXHRcdFx0cmVzb3J0UXVlcnk6IHJlc29ydFF1ZXJ5LFxuXHRcdFx0c2V0QXR0cmlidXRlczogc2V0QXR0cmlidXRlcyxcblx0XHRcdHNldFJlc29ydFF1ZXJ5OiBzZXRSZXNvcnRRdWVyeSxcblx0XHRcdHJlc29ydHM6IHJlc29ydHMsXG5cdFx0XHRyZXNvcnROYW1lOiByZXNvcnROYW1lXG5cdFx0fSlcblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXQ7XG5cbi8qIFx0Y29uc3QgY3JlYXRlUmVzb3J0V2lkZ2V0ID0gYXN5bmMgKHJlc29ydFF1ZXJ5KSA9PiB7XG5cdFx0Y29uc3QgZW5jb2RlZFJlc29ydE5hbWUgPSBlbmNvZGVVUkkocmVzb3J0UXVlcnkpO1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG5cdFx0XHRgaHR0cHM6Ly9hcGkuZm51Z2cubm8vc2VhcmNoP3E9JHtlbmNvZGVkUmVzb3J0TmFtZX1gXG5cdFx0KTtcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xuXHR9OyAqL1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2VkaXQuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/*!***************************!*\
  !*** ./src/block/save.js ***!
  \***************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n\n\nvar Save = function Save(_ref) {\n\tvar className = _ref.className,\n\t    _ref$attributes = _ref.attributes,\n\t    resortName = _ref$attributes.resortName,\n\t    resortOptions = _ref$attributes.resortOptions;\n\n\treturn wp.element.createElement(\n\t\t\"div\",\n\t\t{ className: className },\n\t\tresortName\n\t);\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Save);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zYXZlLmpzP2M0ZDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5cbnZhciBTYXZlID0gZnVuY3Rpb24gU2F2ZShfcmVmKSB7XG5cdHZhciBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcblx0ICAgIF9yZWYkYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcblx0ICAgIHJlc29ydE5hbWUgPSBfcmVmJGF0dHJpYnV0ZXMucmVzb3J0TmFtZSxcblx0ICAgIHJlc29ydE9wdGlvbnMgPSBfcmVmJGF0dHJpYnV0ZXMucmVzb3J0T3B0aW9ucztcblxuXHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFwiZGl2XCIsXG5cdFx0eyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LFxuXHRcdHJlc29ydE5hbWVcblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNhdmU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svc2F2ZS5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!*********************************!*\
  !*** external "wp.blockEditor" ***!
  \*********************************/
/*! dynamic exports provided */
/*! exports used: InspectorControls */
/***/ (function(module, exports) {

module.exports = wp.blockEditor;

/***/ }),
/* 11 */
/*!************************************************!*\
  !*** ./src/block/components/blockControls.jsx ***!
  \************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_block_editor__ = __webpack_require__(/*! @wordpress/block-editor */ 10);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_block_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_block_editor__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_components__ = __webpack_require__(/*! @wordpress/components */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__wordpress_components__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar BlockControls = function BlockControls(_ref) {\n\tvar resortQuery = _ref.resortQuery,\n\t    resortOptions = _ref.resortOptions,\n\t    setAttributes = _ref.setAttributes,\n\t    resortName = _ref.resortName,\n\t    setResortQuery = _ref.setResortQuery,\n\t    resorts = _ref.resorts;\n\n\tvar createOptionsArray = function createOptionsArray(resorts) {\n\t\tvar options = [];\n\t\tfor (var i = 0; i < resorts.length; i++) {\n\t\t\toptions.push({ value: resorts[i], label: resorts[i] });\n\t\t}\n\t\treturn options;\n\t};\n\treturn wp.element.createElement(\n\t\t__WEBPACK_IMPORTED_MODULE_0__wordpress_block_editor__[\"InspectorControls\"],\n\t\tnull,\n\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__wordpress_components__[\"TextControl\"], {\n\t\t\tlabel: \"Search Resorts\",\n\t\t\tvalue: resortQuery,\n\t\t\ttype: \"text\",\n\t\t\tonChange: function onChange(value) {\n\t\t\t\treturn setResortQuery(value);\n\t\t\t}\n\t\t}),\n\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__wordpress_components__[\"RadioControl\"], {\n\t\t\tselected: resortName,\n\t\t\toptions: createOptionsArray(resorts),\n\t\t\tonChange: function onChange(selectedOption) {\n\t\t\t\treturn setAttributes({ resortName: selectedOption });\n\t\t\t}\n\t\t}),\n\t\twp.element.createElement(\n\t\t\t__WEBPACK_IMPORTED_MODULE_1__wordpress_components__[\"PanelBody\"],\n\t\t\t{ title: \"Widget Options\", initialOpen: true },\n\t\t\tObject.keys(resortOptions).map(function (optionKey) {\n\t\t\t\treturn wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__wordpress_components__[\"CheckboxControl\"], {\n\t\t\t\t\tkey: optionKey,\n\t\t\t\t\tlabel: optionKey,\n\t\t\t\t\tonChange: function onChange(isChecked) {\n\t\t\t\t\t\tsetAttributes({\n\t\t\t\t\t\t\tresortOptions: Object.assign({}, resortOptions, _defineProperty({}, \"\" + optionKey, isChecked))\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t})\n\t\t)\n\t);\n};\n/* harmony default export */ __webpack_exports__[\"a\"] = (BlockControls);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2svY29tcG9uZW50cy9ibG9ja0NvbnRyb2xzLmpzeD9kMWMzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IEluc3BlY3RvckNvbnRyb2xzIH0gZnJvbSBcIkB3b3JkcHJlc3MvYmxvY2stZWRpdG9yXCI7XG5pbXBvcnQgeyBUZXh0Q29udHJvbCwgUGFuZWxCb2R5LCBDaGVja2JveENvbnRyb2wsIFJhZGlvQ29udHJvbCB9IGZyb20gXCJAd29yZHByZXNzL2NvbXBvbmVudHNcIjtcblxudmFyIEJsb2NrQ29udHJvbHMgPSBmdW5jdGlvbiBCbG9ja0NvbnRyb2xzKF9yZWYpIHtcblx0dmFyIHJlc29ydFF1ZXJ5ID0gX3JlZi5yZXNvcnRRdWVyeSxcblx0ICAgIHJlc29ydE9wdGlvbnMgPSBfcmVmLnJlc29ydE9wdGlvbnMsXG5cdCAgICBzZXRBdHRyaWJ1dGVzID0gX3JlZi5zZXRBdHRyaWJ1dGVzLFxuXHQgICAgcmVzb3J0TmFtZSA9IF9yZWYucmVzb3J0TmFtZSxcblx0ICAgIHNldFJlc29ydFF1ZXJ5ID0gX3JlZi5zZXRSZXNvcnRRdWVyeSxcblx0ICAgIHJlc29ydHMgPSBfcmVmLnJlc29ydHM7XG5cblx0dmFyIGNyZWF0ZU9wdGlvbnNBcnJheSA9IGZ1bmN0aW9uIGNyZWF0ZU9wdGlvbnNBcnJheShyZXNvcnRzKSB7XG5cdFx0dmFyIG9wdGlvbnMgPSBbXTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJlc29ydHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdG9wdGlvbnMucHVzaCh7IHZhbHVlOiByZXNvcnRzW2ldLCBsYWJlbDogcmVzb3J0c1tpXSB9KTtcblx0XHR9XG5cdFx0cmV0dXJuIG9wdGlvbnM7XG5cdH07XG5cdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdFx0bnVsbCxcblx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoVGV4dENvbnRyb2wsIHtcblx0XHRcdGxhYmVsOiBcIlNlYXJjaCBSZXNvcnRzXCIsXG5cdFx0XHR2YWx1ZTogcmVzb3J0UXVlcnksXG5cdFx0XHR0eXBlOiBcInRleHRcIixcblx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh2YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gc2V0UmVzb3J0UXVlcnkodmFsdWUpO1xuXHRcdFx0fVxuXHRcdH0pLFxuXHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSYWRpb0NvbnRyb2wsIHtcblx0XHRcdHNlbGVjdGVkOiByZXNvcnROYW1lLFxuXHRcdFx0b3B0aW9uczogY3JlYXRlT3B0aW9uc0FycmF5KHJlc29ydHMpLFxuXHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKHNlbGVjdGVkT3B0aW9uKSB7XG5cdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgcmVzb3J0TmFtZTogc2VsZWN0ZWRPcHRpb24gfSk7XG5cdFx0XHR9XG5cdFx0fSksXG5cdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0UGFuZWxCb2R5LFxuXHRcdFx0eyB0aXRsZTogXCJXaWRnZXQgT3B0aW9uc1wiLCBpbml0aWFsT3BlbjogdHJ1ZSB9LFxuXHRcdFx0T2JqZWN0LmtleXMocmVzb3J0T3B0aW9ucykubWFwKGZ1bmN0aW9uIChvcHRpb25LZXkpIHtcblx0XHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChDaGVja2JveENvbnRyb2wsIHtcblx0XHRcdFx0XHRrZXk6IG9wdGlvbktleSxcblx0XHRcdFx0XHRsYWJlbDogb3B0aW9uS2V5LFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShpc0NoZWNrZWQpIHtcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRyZXNvcnRPcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCByZXNvcnRPcHRpb25zLCBfZGVmaW5lUHJvcGVydHkoe30sIFwiXCIgKyBvcHRpb25LZXksIGlzQ2hlY2tlZCkpXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSlcblx0XHQpXG5cdCk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQmxvY2tDb250cm9scztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9jb21wb25lbnRzL2Jsb2NrQ29udHJvbHMuanN4XG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///11\n");

/***/ })
/******/ ]);