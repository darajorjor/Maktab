import {Router} from 'express';
const router = new Router();
import jwt from 'jsonwebtoken'
import User from '../models/user'
import config from '../config.js'

router.route('/').post((req, res) => {
    User.findOne({
        username: req.body.username
    }, (err, user) => {
        if (err) throw err;

        if (!user) {
            res.json({success: false, message: "Authentication failed. User not found."})
        } else if (user) {
            if (user.password != req.body.password) {
                res.json({success: false, message: "Authentication failed. Wrong Password."})
            } else {
                var token = jwt.sign(user, config.secret, {
                    expiresIn: 60 * 24
                });

                res.json({
                    success: true,
                    message: "Enjoy your token \\:D/!",
                    token
                });
            }
        }
    })
});

export default router;