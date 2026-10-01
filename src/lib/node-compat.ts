import util from 'util';

// Polyfill for Node.js 22/24 compatibility
// Node.js removed deprecated util.is* methods (DEP0026 etc.) in modern versions,
// which are still required by legacy dependencies like enjoi (used by @ampeco/ocpp-eliftech).
const utilAny = util as any;

if (!utilAny.isObject) {
    utilAny.isObject = (arg: unknown): boolean => typeof arg === 'object' && arg !== null;
}
if (!utilAny.isArray) {
    utilAny.isArray = Array.isArray;
}
if (!utilAny.isBoolean) {
    utilAny.isBoolean = (arg: unknown): boolean => typeof arg === 'boolean';
}
if (!utilAny.isNumber) {
    utilAny.isNumber = (arg: unknown): boolean => typeof arg === 'number';
}
if (!utilAny.isString) {
    utilAny.isString = (arg: unknown): boolean => typeof arg === 'string';
}
if (!utilAny.isUndefined) {
    utilAny.isUndefined = (arg: unknown): boolean => arg === undefined;
}
if (!utilAny.isNull) {
    utilAny.isNull = (arg: unknown): boolean => arg === null;
}
if (!utilAny.isNullOrUndefined) {
    utilAny.isNullOrUndefined = (arg: unknown): boolean => arg === null || arg === undefined;
}
if (!utilAny.isFunction) {
    utilAny.isFunction = (arg: unknown): boolean => typeof arg === 'function';
}
if (!utilAny.isSymbol) {
    utilAny.isSymbol = (arg: unknown): boolean => typeof arg === 'symbol';
}
if (!utilAny.isRegExp) {
    utilAny.isRegExp = (arg: unknown): boolean => arg instanceof RegExp;
}
if (!utilAny.isDate) {
    utilAny.isDate = (arg: unknown): boolean => arg instanceof Date;
}
if (!utilAny.isError) {
    utilAny.isError = (arg: unknown): boolean => arg instanceof Error;
}
if (!utilAny.isBuffer) {
    utilAny.isBuffer = Buffer.isBuffer;
}
