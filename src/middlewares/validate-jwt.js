import jwt from 'jsonwebtoken';

import { User } from '../models/User';

// Validation that the entered token is correct.

import jwt from 'jsonwebtoken';

export const validateToken = (req, res, next) => {
    const accesToken = req.header('authorization') || req.query.accesstoken;
    if (!accesToken) {
        return res.status(400).json({
            msg: 'Access denied'
        });
    };
    const payload = jwt.verify(accesToken, process.env.SECRETPRIVATEKEY, (err, user) => {
        if (err) {
            res.status(400).json({
                msg: 'Access denied, token expired or incorrect.'
            });
        } else {
            next();
        };
    });

    req.userId = payload.id;

    const user = await User.findById(req.userId, { password: 0 });
    
    if (!user) return res.status(400).json({ msg: 'No user found' });
};