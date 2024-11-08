export const getProperty = <T, K extends keyof T>(
  object: T,
  property: K
): T[K] => object[property];

const user = {
  name: "Mr. X",
  age: 21,
  email: "mrX@gmail.com",
};

// console.log(getProperty(user, "email"));
