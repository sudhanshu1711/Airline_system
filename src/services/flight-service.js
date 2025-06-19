const {FlightRepo,AirlineRepo} = require('../repository/index.js')
const {compareTime} = require('../utils/helper.js')

class FlightService{
    constructor(){
        this.airlineRepo = new AirlineRepo()
        this.flightRepo = new FlightRepo() 
    }
    async createFlight(data){
        try {
            if(!compareTime(data.arrivalTime,data.departureTime)){
               throw {message:"Arrival time cannot be lesser than departure time"}
            }
            const airline = await this.airlineRepo.getAirline(data.airlineId)
            const flight = await this.flightRepo.createFlight({...data,totalSeats:airline.capacity})
            return flight
        } catch (error) {
            throw error
        }
    }
}

module.exports = FlightService
