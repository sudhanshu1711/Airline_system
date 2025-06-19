class CrudRepo {
    constructor(model){
        this.model = model
    }
    async create(data){
        try {
            const result = await this.model.create(data)
            return result
        } catch (error) {
            throw error
        }
    }
    async destroy(id){
         try {
            const result = await this.model.destroy({
                where:{
                    id:id
                }
            })
        } catch (error) {
            throw error
        }
    }
    async get(id){
         try {
            const result = await this.model.findByPk(id)
            return result
        } catch (error) {
            throw error
        }
    }
    async getAll(){
         try {
            const result = await this.model.findAll()
            return result
        } catch (error) {
            throw error
        }
    }
    async update(id,data){
         try {
            const result = await this.model.update(data,{
                where:{
                    id:id
                }
            })
        } catch (error) {
            throw error
        }
    }
}

module.exports = CrudRepo