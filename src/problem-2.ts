export const removeDuplicates = (arr: number[]): number[] => {
  const result: Set<number> = new Set(arr);
  return [...result];
};

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
