class CrudService {
    constructor(repo){
        this.repo = repo
    }
    async create(data){
        try {
            const response= this.repo.create(data)
            return response
        } catch (error) {
            console.log('something went wrong')
            throw error
        }
    }
    async destroy(id){
        try {
             const response= this.repo.destroy(id)
            return response
        } catch (error) {
            console.log('something went wrong')
            throw error
        }
    }
     async get(id){
        try {
             const response= this.repo.get(id)
            return response
        } catch (error) {
            console.log('something went wrong')
            throw error
        }
     }
      async getAll(){
        try {
             const response= this.repo.getAll()
            return response
        } catch (error) {
            console.log('something went wrong')
            throw error
        }
      }
       async update(id,data){
        try {
             const response= this.repo.update(id,data)
            return response
        } catch (error) {
            console.log('something went wrong')
            throw error
        }
       }
}
module.exports=CrudService