const Joi = require('joi');

exports.vlaidateSignUp = (payload) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        password: Joi.string().required(),
        email: Joi.string().email().required(),
        profilePictUrl: Joi.string(),
    });

    return schema.validate(payload);
};

exports.vlaidateSignIn = (payload) => {
    const schema = Joi.object({
        password: Joi.string().required(),
        email: Joi.string().email().required(),
    });

    return schema.validate(payload);
};

exports.vlaidatePatchUser = (payload) => {
    const schema = Joi.object({
        name: Joi.string(),
        email: Joi.string().email(),
        profilePictUrl: Joi.string(),
    });

    return schema.validate(payload);
};
