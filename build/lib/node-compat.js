"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __importDefault(require("util"));
// Polyfill for Node.js 22/24 compatibility
// Node.js removed deprecated util.is* methods (DEP0026 etc.) in modern versions,
// which are still required by legacy dependencies like enjoi (used by @ampeco/ocpp-eliftech).
const utilAny = util_1.default;
if (!utilAny.isObject) {
    utilAny.isObject = (arg) => typeof arg === 'object' && arg !== null;
}
if (!utilAny.isArray) {
    utilAny.isArray = Array.isArray;
}
if (!utilAny.isBoolean) {
    utilAny.isBoolean = (arg) => typeof arg === 'boolean';
}
if (!utilAny.isNumber) {
    utilAny.isNumber = (arg) => typeof arg === 'number';
}
if (!utilAny.isString) {
    utilAny.isString = (arg) => typeof arg === 'string';
}
if (!utilAny.isUndefined) {
    utilAny.isUndefined = (arg) => arg === undefined;
}
if (!utilAny.isNull) {
    utilAny.isNull = (arg) => arg === null;
}
if (!utilAny.isNullOrUndefined) {
    utilAny.isNullOrUndefined = (arg) => arg === null || arg === undefined;
}
if (!utilAny.isFunction) {
    utilAny.isFunction = (arg) => typeof arg === 'function';
}
if (!utilAny.isSymbol) {
    utilAny.isSymbol = (arg) => typeof arg === 'symbol';
}
if (!utilAny.isRegExp) {
    utilAny.isRegExp = (arg) => arg instanceof RegExp;
}
if (!utilAny.isDate) {
    utilAny.isDate = (arg) => arg instanceof Date;
}
if (!utilAny.isError) {
    utilAny.isError = (arg) => arg instanceof Error;
}
if (!utilAny.isBuffer) {
    utilAny.isBuffer = Buffer.isBuffer;
}
//# sourceMappingURL=node-compat.js.map