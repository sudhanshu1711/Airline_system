const {AirportService} = require('../services/index.js')

const airportService = new AirportService()

const create = async(req,res)=>{
   try {
    const response = await airportService.create(req.body)
    return res.status(201).json({
        success:true,
        message:"successfully created an airport",
        data:response,
        error:{}
    })
   } catch (error) {
    return res.status(500).json({
        success:false,
        message:"cannot create airport",
        data:{},
        error:error
    })
   }
}
module.exports ={
    create
}