//while using promise in function we must specify the return data type we expecting from server

const getData = (): Promise<string> => {

    return new Promise<string>((resolve, reject) => {
        const x = Math.round(Math.random() * 500);
        if (x % 2 == 0) {
            resolve('resolved ' + x);
        } else {
            reject('not resolved ' + x);
        }
    });
};

export { getData };