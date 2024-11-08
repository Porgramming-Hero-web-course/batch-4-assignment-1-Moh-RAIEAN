"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDuplicates = void 0;
const removeDuplicates = (arr) => {
    const result = new Set(arr);
    return [...result];
};
exports.removeDuplicates = removeDuplicates;
