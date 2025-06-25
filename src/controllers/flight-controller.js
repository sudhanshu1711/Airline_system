const {FlightService} = require('../services/index.js')
const {SuccessCodes} = require('../utils/error-codes.js')
 const flightService = new FlightService()

 const createFlight = async (req,res)=>{
      try {
        const flight = await flightService.createFlight(req.body)
        return res.status(SuccessCodes.CREATED).json({
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
const getAll =async(req,res)=>{
      try{
        let flightRequestData={
          flightNumber:req.body.flightNumber,
          airlineId:req.body.airlineId,
          departureAirportId:req.body.departureAirportId,
          arrivalAirportId:req.body.arrivalAirportId,
          arrivalTime:req.body.arrivalTime,
          departureTime:req.body.departureTime,
          price:req.body.price
        }
        const response = await flightService.getAllFlightData(flightRequestData)
          return res.status(SuccessCodes.OK).json({
            data:response,
            success:true,
            error:{},
            message:"Successfully fetched flight"
        })
        }
       catch (error) {
        console.error("Flight creation error:", error)  // Log the full error
        return res.status(500).json({
         data: {},
         success: false,
         message: "Not able to get flight",
         error: error
    })
      }
}
const get = async(req,res)=>{
      try {
         const response = await flightService.getFlight(req.params.id)
          return res.status(SuccessCodes.OK).json({
            data:response,
            success:true,
            error:{},
            message:"Successfully fetched flight"
        })
      } catch (error) {
        //console.error("Flight creation error:", error)  // Log the full error
        return res.status(500).json({
         data: {},
         success: false,
         message: "Not able to get flight",
         error: error
       })
      }
     } 
     const update = async(req,res)=>{
      try {
        const response = await flightService.updateFlight(req.params.id,req.body)
        return res.status(SuccessCodes.OK).json({
          data:response,
          success:true,
          error:{},
          message:"Successfully updated flight"
      })
      } catch (error) {
         return res.status(500).json({
         data: {},
         success: false,
         message: "Not able to update flight",
         error: error
       })
      }
     }
 module.exports = {createFlight,getAll,get,update}