type SelectProperty<T, K extends keyof T> = K extends keyof T ? T[K] : never;
//selectProperty generic accpet first argument as a T which is object and Second parameter is a key of T which is declared as K.

//condition is if the given key exist in object then selectproperty type will be the keys value type other wise it will be never

interface MyObject {
    prop1: string;
    prop2: number;
}

const myObj: MyObject = {
    prop1: 'hello',
    prop2: 42
};

type SelectedPropType = SelectProperty<MyObject, 'prop2'>; // number

//type will number becasue in MyObject type prop2 key availale and prop2 propery have type number

// const selectedProp: SelectedPropType = myObj['prop1']; // invalid

//it is invalid because myObj['prop1'] return 'hello' which is string and not assinable to number type