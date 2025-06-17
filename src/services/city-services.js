const {CityRepo} = require('../repository/index.js')

class CityService {
      constructor(){
        this.cityRepo = new CityRepo()
      }
      async createCity(data){
        try {
            const city = this.cityRepo.createCity(data)
              return city
        } catch (error) {
            throw error
        }
      }
      async deleteCity(id){
         try {
            const city = this.cityRepo.deleteCity(id)
            return city           
        } catch (error) {
            throw error
        }
      }
      async updateCity(id,data){
           try {
            const city = this.cityRepo.updateCity(id,data)
            return city
        } catch (error) {
            throw error
        }
      }
      async getCity(id){
            try {
             const city = this.cityRepo.getCity(id)
             return city
        } catch (error) {
            throw error
        }
      }
    }

    module.exports = CityService