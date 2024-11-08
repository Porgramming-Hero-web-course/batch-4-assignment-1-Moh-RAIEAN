"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countWordOccurrences = void 0;
const countWordOccurrences = (sentence, word) => {
    var _a;
    const count = ((_a = sentence.match(new RegExp(word, "gi"))) === null || _a === void 0 ? void 0 : _a.length) || 0;
    return count;
};
exports.countWordOccurrences = countWordOccurrences;
