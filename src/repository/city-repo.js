const {City} =require('../models/index.js')
const {Op} = require('sequelize')

class CityRepo {
    async createCity(data){
        try {
            const city = await City.create(data)
            return city
        } catch (error) {
            throw error
        }
    }
    async deleteCity(id){
        try {
            const city = await City.destroy({
                where:{
                    id:id
                }
            })
            return city
        } catch (error) {
         throw error   
        }
    }
    async getCity(id) {
        try {
            const city = await City.findByPk(id)
            return city
        } catch (error) {
           throw error            
        }
    }
      async updateCity(id,data){
        try {
            const city = await City.update(data,{
                where:{
                    id:id
                }
            })
            const updatedCity = await City.findByPk(id);
             return updatedCity;
        } catch (error) {
             throw error            
        }
      }
      async getAllCities (filter){
        try {
            if(filter.name){
                const cities = City.findAll({
                    where:{
                        name:{
                             [Op.startsWith]:filter.name
                        }
                    }
                })
                return cities
            }
            const cities = await City.findAll()
            return cities
        } catch (error) {
            throw error
        }
      }
}

module.exports = CityRepo