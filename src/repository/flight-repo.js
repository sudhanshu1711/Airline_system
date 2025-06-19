const {FlightDeets} = require('../models/index.js')

class FlightRepo {
    async createFlight(data){
        try {
            const flight = await  FlightDeets.create(data)
            return flight
        } catch (error) {
            throw error
        }
    }
}

module.exports = FlightRepo