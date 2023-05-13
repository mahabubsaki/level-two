//generic is method where we can define a type which accpet dynamic type. For dynamic type this code became reusable as we can pass parameters and let the data wheterver we want


type GenericArray<T> = T[];


const numbers: GenericArray<number> = [2];
const strings: GenericArray<string> = ['2'];


type GenericObject<T, U, V> = {
    name: T,
    age: U,
    gender: V;
};


const object: GenericObject<string, number, boolean> = {
    age: 2,
    gender: true,
    name: 's'
};


interface TestInterFace<T, U, V, W> {
    first: T,
    second: U,
    third: V,
    fourth: W;
}


const test: TestInterFace<string, number, boolean, { name: string; }> = {
    fourth: { name: 's' },
    first: 's',
    second: 2,
    third: true
};

const makeArray = <T, U, V>(param: T, param2: U, param3: V): [T, U, V] => {

    return [param, param2, param3];

};

export { makeArray };