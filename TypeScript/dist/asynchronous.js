"use strict";
//while using promise in function we must specify the return data type we expecting from server
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
const getData = () => {
    return new Promise((resolve, reject) => {
        const x = Math.round(Math.random() * 500);
        if (x % 2 == 0) {
            resolve('resolved ' + x);
        }
        else {
            reject('not resolved ' + x);
        }
    });
};
exports.getData = getData;
