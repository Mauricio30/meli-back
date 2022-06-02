const { authorModel } = require('./authorModel');

const itemModel = {
    author: authorModel,
    item: {
        id: String,
        title: String,
        price: {
            currency: String,
            amount: Number,
            decimals: Number
        },
        picture: String,
        condition: String,
        free_shipping: Boolean,
        sold_quantity: Number,
        description: String
    }
}

module.exports = {
    itemModel
}