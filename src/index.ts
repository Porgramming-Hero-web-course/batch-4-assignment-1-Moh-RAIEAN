import { sumArray } from "./problem-1";
import { removeDuplicates } from "./problem-2";
import { countWordOccurrences } from "./problem-3";
import { calculateShapeArea } from "./problem-4";
import { getProperty } from "./problet-5";
import { updateProfile } from "./problet-6";
import { car } from "./problet-7";
import { validateKeys } from "./problet-8";

// problem 1 sum of all array elements test:-
console.log(sumArray([1, 2, 3, 4]));

// problem 2 remove duplicates from array test:-
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// problem 3 count word occurences in sentence test:-
console.log(
  countWordOccurrences(
    "I love typescript, ami ekta Typescript, do you know how to code with TYPESCRIPT",
    "typescript"
  )
);

// problem 4 calculate area of circle and reactangle test:-
console.log(calculateShapeArea({ shape: "circle", radius: 5 }));
console.log(calculateShapeArea({ shape: "rectangle", width: 6, height: 4 }));

const user = {
  name: "Mr. X",
  age: 21,
  email: "mrX@gmail.com",
};

// problem 5 get property using function test:-
console.log(getProperty(user, "email"));

// problem 6 update profile test:-
console.log(updateProfile(user, { age: 50 }));

// problem 7 get car age test:-
console.log(car.getCarAge());

// problem 8 validate keys test:-
console.log(validateKeys(user, ["age", "name", "email"]));
