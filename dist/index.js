"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const problem_1_1 = require("./problem-1");
const problem_2_1 = require("./problem-2");
const problem_3_1 = require("./problem-3");
const problem_4_1 = require("./problem-4");
const problet_5_1 = require("./problet-5");
const problet_6_1 = require("./problet-6");
const problet_7_1 = require("./problet-7");
const problet_8_1 = require("./problet-8");
console.log((0, problem_1_1.sumArray)([1, 2, 3, 4]));
// console.log(sumArray(1));
console.log((0, problem_2_1.removeDuplicates)([1, 2, 2, 3, 4, 4, 5]));
console.log((0, problem_3_1.countWordOccurrences)("I love typescript, ami ekta Typescript, do you know how to code with TYPESCRIPT", "typescript"));
console.log((0, problem_4_1.calculateShapeArea)({ shape: "circle", radius: 5 }));
console.log((0, problem_4_1.calculateShapeArea)({ shape: "rectangle", width: 6, height: 4 }));
const user = {
    name: "Mr. X",
    age: 21,
    email: "mrX@gmail.com",
};
console.log((0, problet_5_1.getProperty)(user, "email"));
console.log((0, problet_6_1.updateProfile)(user, { age: 50 }));
console.log(problet_7_1.car.getCarAge());
console.log((0, problet_8_1.validateKeys)(user, ["age", "name", "email"]));
