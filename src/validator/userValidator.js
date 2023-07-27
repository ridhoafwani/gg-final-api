const Joi = require('joi');

exports.vlaidatePostUser = (payload) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        profilePictUrl: Joi.string(),
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
