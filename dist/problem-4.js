"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateShapeArea = void 0;
const calculateShapeArea = (shapeObj) => {
    let area = 0;
    if (shapeObj.shape === "circle")
        area = Math.PI * shapeObj.radius * shapeObj.radius;
    if (shapeObj.shape === "rectangle")
        area = shapeObj.width * shapeObj.height;
    return area;
};
exports.calculateShapeArea = calculateShapeArea;
