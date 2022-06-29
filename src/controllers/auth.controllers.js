import { User } from "../models/User";

export const SignUp = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        //  Create user
        const user = await new User({
            firstName,
            lastName,
            email,
            password: await User.encryptPassword(password)
        });

        // Save to DB
        const saveUser = await user.save();

        // Generate JWT

        res.status(200).json({
            user
        })

    } catch (error) {
        res.status(500).json({
            msg: 'Error 500 - Internal Server Error'
        })
    };
};

export const signIn = (req, res) => {

    try {
        res.status(200).json({
            msg: 'Login'
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error 500 - Internal Server Error'
        });
    };
};