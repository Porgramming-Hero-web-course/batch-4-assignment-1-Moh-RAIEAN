export const countWordOccurrences = (
  sentence: string,
  word: string
): number => {
  const searchTerm: RegExp = new RegExp(word, "gi");
  const count: number = sentence.match(searchTerm)?.length || 0;
  return count;
};

// console.log(
//   countWordOccurrences(
//     "I love typescript, ami ekta Typescript, do you know how to code with TYPESCRIPT",
//     "typescript"
//   )
// );
