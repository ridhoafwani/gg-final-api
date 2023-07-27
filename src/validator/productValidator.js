const Joi = require('joi');

exports.validatePostProduct = (payload) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        price: Joi.number().required(),
        url: Joi.string().required(),
    });

    return schema.validate(payload);
};

exports.validatePatchProduct = (payload) => {
    const schema = Joi.object({
        title: Joi.string(),
        price: Joi.number(),
        url: Joi.string(),
        videoId: Joi.string(),
    });

    return schema.validate(payload);
};
