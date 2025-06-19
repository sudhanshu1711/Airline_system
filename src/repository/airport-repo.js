const CrudRepo = require('./crud-repo.js')
const {Airport} = require('../models/index.js')

class AirportRepo extends CrudRepo{
    constructor(){
        super(Airport)
    }
}
module.exports=AirportRepo