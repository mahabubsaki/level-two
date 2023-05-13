"use strict";
//generic is method where we can define a type which accpet dynamic type. For dynamic type this code became reusable as we can pass parameters and let the data wheterver we want
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeArray = void 0;
const numbers = [2];
const strings = ['2'];
const object = {
    age: 2,
    gender: true,
    name: 's'
};
const test = {
    fourth: { name: 's' },
    first: 's',
    second: 2,
    third: true
};
const makeArray = (param, param2, param3) => {
    return [param, param2, param3];
};
exports.makeArray = makeArray;
