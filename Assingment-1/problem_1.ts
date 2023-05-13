//Create a TypeScript program that declares a function that takes two parameters, a string and a number. The function should log the string parameter repeated the number of times specified by the number parameter. If the number parameter is not provided, it should default to 3.
const problemOne = (paramString: string, paramNumber: number = 3): void => {
    new Array(paramNumber).fill(0).forEach(_ => console.log(paramString));
};