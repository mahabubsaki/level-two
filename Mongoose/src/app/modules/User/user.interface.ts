export default interface IUser {
    id: string,
    role: 'student',
    name: {
        fName: string,
        mName?: string,
        lName: string;
    };
    dateOfBirth?: string,
    gender: "male" | "female";
    email: string,
    password: string;
}