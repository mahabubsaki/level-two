"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compare = void 0;
const userInfo = [101, 'Ema', 'John', true, , '101'];
//2
function compare(param1, param2) {
    return param1.filter(item => param2.indexOf(item) > -1);
}
exports.compare = compare;
function filter(products, condition) {
    if (typeof condition === 'number') {
        return products.filter(item => item.price > 200);
    }
    else if (typeof condition === 'string') {
        return products.filter(item => item.category === condition);
    }
    return products;
}
