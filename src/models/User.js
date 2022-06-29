import { Schema, model } from 'mongoose';
import bcryptjs from 'bcryptjs'

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required!!']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required!!']
    },
    email: {
        type: String,
        unique: true,
        match: [/.+\@.+\..+/, '** Email is invalid **'],
        required: [true, 'Email is required!!']
    },
    password: {
        type: String,
        required: [true, 'Password is required!!']
    }
});

UserSchema.statics.encryptPassword = async () => {
    const salt = await bcryptjs.genSalt(10);
    return await bcryptjs.hash(password, salt)
};

UserSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcryptjs.compare(password, receivedPassword);
};

export const User = model('User', UserSchema);