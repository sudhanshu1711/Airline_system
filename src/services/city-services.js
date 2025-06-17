const {CityRepo} = require('../repository/index.js')

class CityService {
      constructor(){
        this.CityRepo = new CityRepo()
      }
      async createCity(data){
        try {
            const city = this.CityRepo.createCity(data)
              return city
        } catch (error) {
            throw error
        }
      }
      async deleteCity(id){
         try {
            const city = this.CityRepo.deleteCity(id)
            return city           
        } catch (error) {
            throw error
        }
      }
      async updateCity(id,data){
           try {
            const city = this.CityRepo.updateCity(id,data)
            return city
        } catch (error) {
            throw error
        }
      }
      async getCity(id){
            try {
             const city = this.CityRepo.getCity(id)
             return city
        } catch (error) {
            throw error
        }
      }
    }

    module.exports = CityService