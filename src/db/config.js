import {connect} from "mongoose";

const connectDB = () => {
    try {
        connect()
    } catch (error) {
        
    }
}