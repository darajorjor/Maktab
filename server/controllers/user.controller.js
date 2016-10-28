import User from '../models/user';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all Users
 * @param req
 * @param res
 * @returns void
 */
export function getUsers(req, res) {
    User.find({}, (err, users) => {
        res.json({users});
    })
}

/**
 * Save a User
 * @param req
 * @param res
 * @returns void
 */
export function addUser(req, res) {
    if (!req.body.username || !req.body.email || !req.body.password) {
        res.status(403).end();
    }

    const newUser = new User({username: req.body.username, email: req.body.email, password: req.body.password});

    //sanitize inputs
    newUser.username = sanitizeHtml(newUser.username);
    newUser.email = sanitizeHtml(newUser.email);
    newUser.password = sanitizeHtml(newUser.password);

    newUser.save((err, saved) => {
        if (err) {
            console.log(err);
            res.status(500).send(err)
        }
        res.json({user: saved});
    })
}

/**
 * Get a single User
 * @param req
 * @param res
 * @returns void
 */
export function getUser(req, res) {

}

/**
 * Update a User
 * @param req
 * @param res
 * @returns void
 */
export function updateUser(req, res) {

}

/**
 * Delete a User
 * @param req
 * @param res
 * @returns void
 */
export function deleteUser(req, res) {

}
