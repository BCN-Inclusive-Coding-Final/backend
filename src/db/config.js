import {connect} from 'mongoose';

export const connectDB = async () => {
    try {
        await connect(process.env.MONGO_URL);

        console.log('Database connect successfully!!');
    } catch (error) {
        console.log('Failed to connect to the database');
    };
};