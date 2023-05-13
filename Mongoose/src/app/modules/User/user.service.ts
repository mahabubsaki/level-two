import UserModel from "./user.model";
import { Request } from '../../../imports';
import IUser from "./user.interface";

const createUser = async (req: Request): Promise<IUser> => {
    const userInstance = new UserModel({
        email: req.body.email, gender: req.body.gender, id: Math.round(Math.random() * 50000).toString(), name: {
            fName: req.body.name.fName,
            lName: req.body.name.lName,
            mName: req.body.name.mName
        }, password: req.body.password, role: 'student', dateOfBirth: req.body.dateOfBirth
    });
    const newUser = await userInstance.save();
    return newUser;
};

const getUsers = async (): Promise<IUser[]> => {
    const allUsers = await UserModel.find();
    return allUsers;
};

const getSpeceficUser = async (id: string): Promise<IUser | null> => {
    const singleUser = await UserModel.findOne({ id }, { name: 1, _id: 0 }); // here is second parameter is projection which means we can specify which property we want. desired property value should be 1 . _id comes auto so I forcefully set 0 to not include it
    return singleUser;
};

export { createUser, getUsers, getSpeceficUser };