const {ClientErrorCodes} = require('../utils/error-codes.js')
const validateFlight = (req,res,next)=>{
   if(
    !req.body.flightNumber ||
    !req.body.airlineId ||
    !req.body.departureAirportId ||
    !req.body.arrivalAirportId ||
    !req.body.arrivalTime ||
    !req.body.departureTime ||
    !req.body.price
   ){
    return res.status(ClientErrorCodes.BAD_REQUEST).json({
        data:{},
        success:false,
        message:"Invalid request",
        error:"Missing mandatory feilds"
    })
   }
   next()
}
module.exports = {validateFlight}