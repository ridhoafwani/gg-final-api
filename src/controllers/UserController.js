const InvariantError = require('../exceptions/InvariantError');
const { vlaidatePostUser, vlaidatePatchUser } = require('../validator/userValidator');

class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    postUser = async (req, res, next) => {
        try {
            const { error } = vlaidatePostUser(req.body);
            if (error) throw new InvariantError(error.details[0].message);
            const newUser = await this.userService.addUser(req.body);
            res.status(201).json({
                message: 'User created successfully',
                data: newUser,
            });
        } catch (err) {
            next(err);
        }
    };

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
}

module.exports = UserController;
