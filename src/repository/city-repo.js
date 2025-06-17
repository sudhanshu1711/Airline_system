const {City} =require('../models/index.js')

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
}

module.exports = CityRepo