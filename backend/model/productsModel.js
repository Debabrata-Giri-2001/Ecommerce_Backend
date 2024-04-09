const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Products Name"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Please Enter Products description"]
    },
    price: {
        type: Number,
        required: [true, "Please Enter Products Price"],
        maxlength: [8, "Price can't exceed 8 char"]
    },
    rating: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, "Please Enter Products category"],
    },
    stock: {
        type: Number,
        required: [true, "Please Enter Products stock"],
        maxlength: [4, "stock can't exceed 4 char"]
    },
    numOfReview: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: "User",
                required: true,
            },
            name: {
                type: String,
                required: true
            },
            rating: {
                type: String,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Product', productSchema)