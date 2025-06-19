const {FlightDeets} = require('../models/index.js')
const {Op} = require('sequelize')
class FlightRepo {
    #createFilter(data){
       let filter ={}
       if(data.arrivalAirportId){
        filter.arrivalAirportId=data.arrivalAirportId
       }
       if(data.departureAirportId){
        filter.departureAirportId=data.departureAirportId
       }
      let priceFilter =[]
      if(data.minPrice){
        priceFilter.push({price:{[Op.gte]:data.minPrice}})
      }
      if(data.maxPrice){
       priceFilter.push({price:{[Op.lte]:data.maxPrice}}) 
      }
      Object.assign(filter,{[Op.and]:priceFilter})
       return filter
    }
    async createFlight(data){
        try {
            const flight = await  FlightDeets.create(data)
            return flight
        } catch (error) {
            throw error
        }
    }
    async getFlight(id){
          try {
            const flight = await  FlightDeets.findByPk(id)
            return flight
        } catch (error) {
            throw error
        }
    }
    async getAllFlight(filter){
          try {
            const filterObject= this.#createFilter(filter)
            const flight = await  FlightDeets.findAll({
                where:filterObject
            })
            return flight
        } catch (error) {
            throw error
        }
    }
}

module.exports = FlightRepo