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

export const SignUp = (req, res) => {

};