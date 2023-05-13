// if we want any type/interface objects key as union then we can use keyof operator

interface TestInterface {
    name: string,
    age: number;
}

type TestInterfaceProps = keyof TestInterface;

const x: TestInterfaceProps = 'age';

//x can be only assigned age or name

function prop<X, Y extends keyof X>(obj: X, key: Y): X[Y] {
    return obj[key];
}

//Y extends keyof X means Y can be only be the props of X