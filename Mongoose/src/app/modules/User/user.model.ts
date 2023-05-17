import { Model, model } from "../../../imports";
import IUser, { IUserMethods, UserModelType } from "./user.interface";
import userSchema from "./user.schema";

// creating a type for our custom methods for user . this wont work if we want both instance methods and static methods
// export type UserModelType = Model<IUser, {}, IUserMethods>;

// including the type in our model
const UserModel = model<IUser, UserModelType>('User', userSchema, 'mongoose-basic-practice');

export default UserModel;