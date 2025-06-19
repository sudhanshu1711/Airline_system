const CrudService = require('./crud-service.js')
const {AirportRepo} = require('../repository/index.js')

class AirportService extends CrudService{
    constructor(){
        const airportRepo = new AirportRepo()
        super(airportRepo)
    }
}
module.exports=AirportService