//generic constraints is a way to force generic to assure props. Sometimes in function parameter we want some must added prop types. But as generic is dymanic we cant normally force to assure props. constrains is a way to do that


const info = <T extends { name: string, age: number; }>(param: T): string => {

    return `hello my name is ${param.name} and my age is ${param.age}`;
};

console.log(info({ age: 2, name: '2', status: true }));


//here age and name is must in param object but other props is optional