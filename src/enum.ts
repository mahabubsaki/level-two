//we can set a group of constants in enum which will help us in real life project

enum TOAST {
    SUCCESS,
    ERROR,
    INFO,
}


function showToast(toastType: TOAST, message: string): void {
    if (toastType === TOAST.ERROR) {
        console.log('Error: ', message);
    }
    else if (toastType === TOAST.INFO) {
        console.log('Info: ', message);
    }
    else if (toastType === TOAST.SUCCESS) {
        console.log('Info: ', message);
    } else {
        console.log('Normal', message);
    }
}

export { showToast, TOAST };