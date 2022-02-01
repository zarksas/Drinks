const { Router } = require('express');
const router = Router();
const { drinksControllers} = require('../controllers/drinks.controllers')

router.get('/drinks', drinksControllers.getDrinks);
router.get('/drinks/in-stock', drinksControllers.getDrinksInStock);
router.get('/drinks/:id', drinksControllers.getDrinksById);
router.post('/drinks', drinksControllers.postDrinks);
router.delete('/drinks/:id', drinksControllers.deleteDrinksById);
router.patch('/drinks/:id', drinksControllers.patchDrinksById);






module.exports = router;