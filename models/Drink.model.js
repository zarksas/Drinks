const mongoose = require('mongoose');

const drinkSchema = mongoose.Schema({
    name: String,
    price: Number,
    isInStock: Boolean,
    isIncoffeine: Boolean,
    volume: Number,
    description: String
})


const Drink = mongoose.model('Drink', drinkSchema);

module.exports = Drink;