"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateKeys = void 0;
const validateKeys = (obj, keys) => {
    const result = keys.every((value) => Object.prototype.hasOwnProperty.call(obj, value));
    return result;
};
exports.validateKeys = validateKeys;
