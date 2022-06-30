import { User } from '../models/User';
import { sign } from 'jsonwebtoken';

export const SignUp = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {

        //  Create user
        const user = await new User({
            firstName,
            lastName,
            email,
            password: await User.encryptPassword(password)
        });

        // Check if email exists
        const emailExist = await User.findOne({ email })
        if (emailExist) return res.status(400).json({ msg: 'That email already exists' })


        // Save to DB
        const saveUser = await User.create({email, password, firstName, lastName});

        // Generate JWT
        const token = sign({ id: saveUser._id }, process.env.SECRETORPRIVATEKEY, { expiresIn: '4h' })
        console.log("token",token)
        res.status(200).json({
            user,
            token
        })

    } catch (error) {

        console.log("error", error)
        res.status(500).json({
            msg: 'Error 500 - Internal Server Error',
        })
    };
};

export const signIn = async (req, res) => {
    try {

        // Check if the user exists with the email
        const userDB = await User.find({ email: req.body.email });

        if (!userDB) {
            return res.status(403).json({
                msg: 'Email doesn`t exists.'
            });
        };

        // Validate password
        const validPassword = await User.comparePassword(req.body.password, userDB.password);

        if (!validPassword) {
            return res.status(403).json({
                token: null,
                msg: 'The password you entered is not correct.'
            });
        };

        // Get token
        const token = sign({ id: userDB._id }, process.env.SECRETORPRIVATEKEY, { expiresIn: '4h' });

        res.status(200).json({
            user: userDB,
            token
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error 500 - Internal Server Error'
        });
    };
};