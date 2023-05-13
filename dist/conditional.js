"use strict";
const myObj = {
    prop1: 'hello',
    prop2: 42
};
//type will number becasue in MyObject type prop2 key availale and prop2 propery have type number
// const selectedProp: SelectedPropType = myObj['prop1']; // invalid
//it is invalid because myObj['prop1'] return 'hello' which is string and not assinable to number type
