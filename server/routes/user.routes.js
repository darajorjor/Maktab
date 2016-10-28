import { Router } from 'express';
import * as UserController from '../controllers/user.controller';
const router = new Router();

// Get all Users
router.route('/').get(UserController.getUsers);

// Get one User by cuid
router.route('/:cuid').get(UserController.getUser);

// Update one User by cuid
router.route('/:cuid').put(UserController.updateUser);

// Add a new User
router.route('/').post(UserController.addUser);

// Delete a User by cuid
router.route('/:cuid').delete(UserController.deleteUser);

export default router;