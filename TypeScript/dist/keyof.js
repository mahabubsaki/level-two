"use strict";
// if we want any type/interface objects key as union then we can use keyof operator
const x = 'age';
//x can be only assigned age or name
function prop(obj, key) {
    return obj[key];
}
//Y extends keyof X means Y can be only be the props of X
