const Joi = require('joi');

exports.validatePostComment = (payload) => {
    const schema = Joi.object({
        comment: Joi.string().required(),
        userId: Joi.string().required(),
    });

    return schema.validate(payload);
};

exports.validatePatchComment = (payload) => {
    const schema = Joi.object({
        comment: Joi.string(),
        userId: Joi.string(),
    });

    return schema.validate(payload);
};
