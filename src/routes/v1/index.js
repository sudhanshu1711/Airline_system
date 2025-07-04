const express =require('express')
const {CityController,FlightController,AirportController} = require('../../controllers/index.js')
const {FlightMiddleware} = require('../../middlewares/index.js')
const router = express.Router()

router.post('/city',CityController.create)
router.post('/cities',CityController.createCities)
router.delete('/city/:id',CityController.destroy)
router.get('/city/:id',CityController.get)
router.get('/city',CityController.getAll)
router.patch('/city/:id',CityController.update)
router.post('/flights',FlightMiddleware.validateFlight,FlightController.createFlight)
router.get('/flights',FlightController.getAll)
router.get('/flights/:id',FlightController.get)
router.patch('/flights/:id',FlightController.update)
router.post('/airports',AirportController.create)
module.exports = router