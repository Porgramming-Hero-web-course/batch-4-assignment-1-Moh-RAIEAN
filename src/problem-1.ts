export const sumArray = (numArr: number[]): number => {
  const result: number = numArr.reduce((prev, current) => prev + current);
  return result;
};

// console.log(sumArray([1, 2, 3, 4]));
