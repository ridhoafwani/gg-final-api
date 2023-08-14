/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
const jwt = require('jsonwebtoken');
const InvariantError = require('../exceptions/InvariantError');
const { vlaidatePatchUser, vlaidateSignUp, vlaidateSignIn } = require('../validator/userValidator');

class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    createToken = (_id) => jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });

    getUser = async (req, res, next) => {
        try {
            const user = await this.userService.getUser(req.params.id);
            res.json(user);
        } catch (err) {
            next(err);
        }
    };

    getUsers = async (req, res, next) => {
        try {
            const users = await this.userService.getUsers();
            res.json(users);
        } catch (err) {
            next(err);
        }
    };

    patchUser = async (req, res, next) => {
        try {
            const { error } = vlaidatePatchUser(req.body);
            if (error) throw new InvariantError(error.details[0].message);
            await this.userService.updateUser(req.params.id, req.body);
            res.json({
                message: 'User updated successfully',
            });
        } catch (err) {
            next(err);
        }
    };

    deleteUser = async (req, res, next) => {
        try {
            await this.userService.deleteUser(req.params.id);
            res.json({
                message: 'User deleted successfully',
            });
        } catch (err) {
            next(err);
        }
    };

    signupUser = async (req, res, next) => {
        try {
            const { error } = vlaidateSignUp(req.body);
            if (error) throw new InvariantError(error.details[0].message);
            const user = await this.userService.signupUser(req.body);
            const token = this.createToken(user._id);
            res.json({
                email: user.email,
                name: user.name,
                id: user._id,
                profile: user.profilePictUrl,
                token,
            });
        } catch (err) {
            next(err);
        }
    };

    loginUser = async (req, res, next) => {
        try {
            const { error } = vlaidateSignIn(req.body);
            if (error) throw new InvariantError(error.details[0].message);
            const user = await this.userService.loginUser(req.body);
            const token = this.createToken(user._id);
            res.json({
                email: user.email,
                name: user.name,
                id: user._id,
                profile: user.profilePictUrl,
                token,
            });
        } catch (err) {
            next(err);
        }
    };
}

module.exports = UserController;
