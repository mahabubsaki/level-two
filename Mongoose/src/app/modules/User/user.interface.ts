import { HydratedDocument, Model } from "../../../imports";

export default interface IUser {
    id: string,
    role: 'student' | 'admin',
    name: {
        fName: string,
        mName?: string,
        lName: string;
    };
    dateOfBirth?: string,
    gender: "male" | "female";
    email: string,
    password: string;
    fullName: string;
}


// our custom instance method interface for model which includes functions 
export interface IUserMethods {
    createFullName: () => string;
}


//We have create this custome model type if we want to use both instance method and static method
export interface UserModelType extends Model<IUser, {}, IUserMethods> {
    getAdminUsers: () => Promise<HydratedDocument<IUser, IUserMethods>>;
}