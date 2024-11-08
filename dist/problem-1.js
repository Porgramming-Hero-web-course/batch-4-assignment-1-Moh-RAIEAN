"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumArray = void 0;
const sumArray = (numArr) => {
    const result = numArr.reduce((prev, current) => prev + current);
    return result;
};
exports.sumArray = sumArray;
console.log((0, exports.sumArray)([1, 2, 3, 4]));
