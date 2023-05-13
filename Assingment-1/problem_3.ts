//Create a TypeScript program that uses a generic function to reverse an array of strings, and takes a variable number of strings to the array using rest parameters. Provide an example of calling the function with a variable number of strings.

const problemThree = <T>(...params: T[]): T[] => {
    return params.reverse();
};
console.log(problemThree('A', 'B')); // ['B','A']