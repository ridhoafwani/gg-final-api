const InvariantError = require('../exceptions/InvariantError');
const NotFoundError = require('../exceptions/NotFoundError');

class UserService {
    constructor(userModel) {
        this.User = userModel;
    }

    addUser = async (user) => {
        try {
            const newUser = new this.User(user);
            const result = await newUser.save();
            return result;
        } catch (err) {
            throw new InvariantError(err.message);
        }
    };

    getUser = async (id) => {
        try {
            const result = await this.User.findById(id);
            if (!result) { throw new NotFoundError('User not found'); }
            return result;
        } catch (err) {
            throw new NotFoundError('User not found');
        }
    };

    getUsers = async () => {
        try {
            const result = await this.User.find();
            return result;
        } catch (err) {
            throw new NotFoundError('User not found');
        }
    };

    updateUser = async (id, user) => {
        try {
            await this.User.findByIdAndUpdate(id, user);
        } catch (err) {
            throw new NotFoundError('User not found');
        }
    };

    deleteUser = async (id) => {
        try {
            const result = await this.User.findByIdAndDelete(id);
            if (!result) { throw new NotFoundError('User not found'); }
            return result;
        } catch (err) {
            throw new NotFoundError('User not found');
        }
    };
}

module.exports = UserService;
