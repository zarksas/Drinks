const Drink = require('../models/Drink.model');

module.exports.drinksControllers = {
    getDrinks: async(req, res) => {          
        const drinks = await Drink.find({}, {name: 1, price: 1})
        res.json(drinks)      
    },  

    getDrinksInStock: async(req, res) => {
        const drinks = await Drink.find({isInStock: 1})
        res.json(drinks)
    },

    getDrinksById: async(req, res) => {
        const drinks = await Drink.find(req.params.id)
        res.json(drinks)       
    },

    postDrinks: async(req, res) => {
        try {
            const { name, price, isInStock, isIncoffeine, volume, description } = req.body;
            const drinks = await Drink.create({
                name: name,
                price: price,
                isInStock: isInStock,
                isIncoffeine: isIncoffeine,
                volume: volume,
                description: description
            })
            res.json(drinks)
        } catch(e) {
            console.log(`${e} Ошибка при добавлении нового напитка`)
        }
       
    },

    deleteDrinksById: async(req, res) => {
        const drinks = await Drink.findByIdAndRemove(req.params.id)
    },

    patchDrinksById: async(req, res) => {
        const {name, price, isInStock, isIncoffeine, volume, description} = req.body;
        const drinks = await Drink.findByIdAndUpdate({
            name: name,
            price: price,
            isInStock: isInStock,
            isIncoffeine: isIncoffeine,
            volume: volume,
            description: description
        })
        res.json(drinks)
    }

}