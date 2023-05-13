"use strict";
//we can set a group of constants in enum which will help us in real life project
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOAST = exports.showToast = void 0;
var TOAST;
(function (TOAST) {
    TOAST[TOAST["SUCCESS"] = 0] = "SUCCESS";
    TOAST[TOAST["ERROR"] = 1] = "ERROR";
    TOAST[TOAST["INFO"] = 2] = "INFO";
})(TOAST || (TOAST = {}));
exports.TOAST = TOAST;
function showToast(toastType, message) {
    if (toastType === TOAST.ERROR) {
        console.log('Error: ', message);
    }
    else if (toastType === TOAST.INFO) {
        console.log('Info: ', message);
    }
    else if (toastType === TOAST.SUCCESS) {
        console.log('Info: ', message);
    }
    else {
        console.log('Normal', message);
    }
}
exports.showToast = showToast;
