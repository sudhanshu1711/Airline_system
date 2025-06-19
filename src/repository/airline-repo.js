const {Airline} = require('../models/index.js')

class AirlineRepo {
    async getAirline(id){
    try {
        const airplane = await Airline.findByPk(id)
        return airplane
    } catch (error) {
       throw error       
    }
    }
}
module.exports = AirlineRepo