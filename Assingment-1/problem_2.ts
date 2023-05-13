//Write a function that takes in an array of objects with properties name and age, and returns only the objects where the person's age is greater than or equal to 18,
interface IPerson {
    name: string,
    age: number;
}

const problemTwo = (param: IPerson[]): IPerson[] => {
    return param.filter((item: IPerson) => item.age >= 18);
};
