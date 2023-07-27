const Joi = require('joi');

exports.validatePostVideo = (payload) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        thumbnail: Joi.string().required(),
        url: Joi.string().required(),
    });

    return schema.validate(payload);
};

exports.validatePatchVideo = (payload) => {
    const schema = Joi.object({
        title: Joi.string(),
        thumbnail: Joi.string(),
        url: Joi.string(),
    });

    return schema.validate(payload);
};
