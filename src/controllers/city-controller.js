const { CityService} = require('../services/index.js')

const cityService = new CityService()

const create = async(req,res)=>{
  try {
    const city = await cityService.createCity(req.body)
    return res.status(201).json({
        data:city,
        success:true,
        message:"Successfully created a city",
        error:{}
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
        data:{},
        success:false,
        message:"Not able to create city",
        error:error
    })
  }
}
const destroy = async(req,res)=>{
    try {
     const city = await cityService.deleteCity(req.params.id)
    return res.status(200).json({
        data:city,
        success:true,
        message:"Successfully deleted a city",
        error:{}
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
        data:{},
        success:false,
        message:"Not able to delete city",
        error:error
    })
  }
}
const update = async(req,res)=>{
    try {
     const city = await cityService.updateCity(req.params.id,req.body)
    return res.status(200).json({
        data:city,
        success:true,
        message:"Successfully updated a city",
        error:{}
    })
  } catch (error) {
    console.log(error)
     return res.status(500).json({
        data:{},
        success:false,
        message:"Not able to update city",
        error:error
    })
  }
}
const get = async(req,res)=>{
    try {
     const city = await cityService.getCity(req.params.id)
    return res.status(200).json({
        data:city,
        success:true,
        message:"Successfully got the details of a city",
        error:{}
    })
  } catch (error) {
    console.log(error)
     return res.status(500).json({
        data:{},
        success:false,
        message:"Not able to get city",
        error:error
    })
  }
}

module.exports={
    create,update,destroy,get
}