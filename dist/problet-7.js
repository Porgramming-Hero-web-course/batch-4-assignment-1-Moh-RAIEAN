"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.car = void 0;
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getCarAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
}
exports.car = new Car("Honda", "Civic", 2018);
