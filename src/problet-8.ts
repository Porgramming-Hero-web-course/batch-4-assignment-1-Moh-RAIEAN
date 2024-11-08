export const validateKeys = <T>(obj: T, keys: (keyof T)[]): boolean => {
  const result: boolean = keys.every((value) =>
    Object.prototype.hasOwnProperty.call(obj, value)
  );
  return result;
};

const user = {
  name: "Mr. X",
  age: 21,
  email: "mrX@gmail.com",
};

console.log(validateKeys(user, ["age", "name", "email"]));
