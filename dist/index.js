"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const names = 's';
const hello = (...friends) => {
    return friends.map(item => item.name).join('-');
};
console.log(hello({ name: 'saki' }, { name: 'arif' }));
