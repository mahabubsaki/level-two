import { Schema } from "../../../imports";
import IUser from "./user.interface";

const userSchema = new Schema<IUser>({
    name: {
        fName: { type: String, required: true },
        mName: { type: String, required: false },
        lName: { type: String, required: true }
    },
    email: { type: String, required: true },
    dateOfBirth: { type: String, required: false },
    id: { type: String, required: true, unique: true },
    gender: { type: String, required: true, enum: ['male', 'female'] },
    role: { type: String, required: true, enum: ['student'] },
    password: { type: String, required: true }
});

export default userSchema;