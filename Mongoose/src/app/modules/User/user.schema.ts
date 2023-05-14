import { Schema } from "../../../imports";
import IUser, { IUserMethods, UserModelType } from "./user.interface";


// as we have custom methods so we have to give our model type and methods interface as second and third parameter in generic of our schema
const userSchema = new Schema<IUser, UserModelType, IUserMethods>({
    name: {
        fName: { type: String, required: true },
        mName: { type: String, required: false },
        lName: { type: String, required: true }
    },
    email: { type: String, required: true },
    dateOfBirth: { type: String, required: false },
    id: { type: String, required: true, unique: true },
    gender: { type: String, required: true, enum: ['male', 'female'] },
    role: { type: String, required: true, enum: ['student', 'admin'] },
    password: { type: String, required: true },
    fullName: { type: String, required: true }
});

//defining our custom method function
userSchema.method('createFullName', function () {
    return [this.name.fName, this.name?.mName, this.name.lName].filter(item => item).join(' ');
});

userSchema.static('getAdminUsers', async function () {
    const admins = await this.find({ role: 'admin' });
    return admins;
});
export default userSchema;