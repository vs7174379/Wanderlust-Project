const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./reviews.js");


const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: [
            {
                url: String,
                filename: String,
            }
        ],
        validate: {
            validator: function (val) {
                return val.length >= 5;
            },
            message: 'Minimum 5 images required.'
        }
    }
    ,
    price: Number,
    location: String,
    country: String,

    // ✅ Newly added fields based on the form
    property_types: [String],
    guests: Number,
    bedrooms: Number,
    beds: Number,
    bathrooms: Number,
    amenities: [String],

    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "Review"
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

// Delete related reviews when a listing is deleted
listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews } });
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
