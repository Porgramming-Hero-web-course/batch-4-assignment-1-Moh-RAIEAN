class Car {
  constructor(public make: string, public model: string, public year: number) {}
  getCarAge() {
    const currentYear: number = new Date().getFullYear();
    return currentYear - this.year;
  }
}

export const car = new Car("Honda", "Civic", 2018);

// problem 7 get car age test:-
console.log(car.getCarAge());
