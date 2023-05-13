interface Student {
    id: number,
    name: string,
    parents: {
        father: string,
        mother: string;
    },
    brilliant: boolean;
}

type parentType = Pick<Student, 'parents'>; // this will create a type of object where will we have parents type
type parentType2 = Pick<Student, 'parents' | 'name'>; // this will create a type of object where  we will have parents and name type
type parentType3 = Omit<Student, 'parents'>; // this will create a type of object where  we will have all the props of Student interface without parents  type
type parentType4 = Partial<Student>; //this will create full clone of student but here all property will be optional
type parentType5 = Required<Student>; // this will create full clone of student but it is the reverse version of Partial which means here all property will be required

const xsds: Readonly<Student> = { // if we declare a variable with type readonly then we cant change it later
    brilliant: true,
    id: 2,
    name: 's',
    parents: {
        father: 's',
        mother: 'sda'
    }
};

