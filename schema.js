const Joi = require("joi");



module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required().min(0),
        image: Joi.array().items(Joi.string()).min(5),

        property_types: Joi.array().items(Joi.string()),
        guests: Joi.number().min(0),
        bedrooms: Joi.number().min(0),
        beds: Joi.number().min(0),
        bathrooms: Joi.number().min(0),
        amenities: Joi.array().items(Joi.string())
    }).required()
});


    module.exports.reviewSchema=Joi.object({
        Review:Joi.object({
           rating:Joi.number().required(),
            comment:Joi.string().required(),

        }).required(),
    });