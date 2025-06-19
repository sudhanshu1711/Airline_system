const {FlightService} = require('../services/index.js')

 const flightService = new FlightService()

 const createFlight = async (req,res)=>{
      try {
        const flight = await flightService.createFlight(req.body)
        return res.status(201).json({
            data:flight,
            success:true,
            error:{},
            message:"Successfully created a flight"
        })
      } catch (error) {
        //console.error("Flight creation error:", error)  // Log the full error
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create flight",
      error: error
    })
      }
 }

 module.exports = {createFlight}