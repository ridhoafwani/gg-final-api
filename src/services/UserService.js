const bcrypt = require('bcrypt');
const InvariantError = require('../exceptions/InvariantError');
const NotFoundError = require('../exceptions/NotFoundError');

class UserService {
    constructor(userModel) {
        this.User = userModel;
    }

    getUser = async (id) => {
        try {
            const result = await this.User.findById(id).select('-password');
            if (!result) { throw new NotFoundError('User not found'); }
            return result;
        } catch (err) {
            throw new NotFoundError('User not found');
        }
    };

    getUsers = async () => {
        try {
            const result = await this.User.find().select('-password');
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

    signupUser = async (user) => {
        const { email, name, password } = user;
        const exists = await this.User.findOne({ email });

        if (exists) {
            throw new InvariantError('Email already in use');
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const newUser = new this.User({
            name, email, password: hash, profilePictUrl: '',
        });
        const result = await newUser.save();

        return result;
    };

    loginUser = async ({ email, password }) => {
        const user = await this.User.findOne({ email });
        if (!user) {
            throw new InvariantError('Incorrect email');
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            throw new InvariantError('Incorrect password');
        }

        return user;
    };
}

module.exports = UserService;
