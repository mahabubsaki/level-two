import { model } from "../../../imports";
import IUser from "./user.interface";
import userSchema from "./user.schema";

const UserModel = model<IUser>('User', userSchema, 'mongoose');

export default UserModel;