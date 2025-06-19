const express =require('express')
const {CityController,FlightController} = require('../../controllers/index.js')

const router = express.Router()

router.post('/city',CityController.create)
router.post('/cities',CityController.createCities)
router.delete('/city/:id',CityController.destroy)
router.get('/city/:id',CityController.get)
router.get('/city',CityController.getAll)
router.patch('/city/:id',CityController.update)
router.post('/flights',FlightController.createFlight)
module.exports = router