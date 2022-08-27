let mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);

let Currency = mongoose.Types.Currency;
let Schema = mongoose.Schema;

let promoSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    label: {
        type: String,
        default: ""
    },
    price: {
        type: Currency,
        required: true,
        min: 0
    },
    description: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
});

let Promotions = mongoose.model('Promotion', promoSchema);

module.exports = Promotions;