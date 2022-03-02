const connection = require("../models/dbConnect")
class NhaThueController{
    // /nhaThue/getAll
    //method: GET
    getAll(req, res, next){
        try {
            const query= "select * from nhaThue"
            connection.query(query, (error, result)=>{
                if(error) throw error
                if(result.length>0) return res.json({success: true, message:"successful", result})
                return res.json({success: false, message: "data not found"})
            })
        } catch (error) {
            throw error
        }
    }
    // /nhaThue/getById/:id
    //method: GET
    getById(req, res, next){

    }

    // /nhaThue/addOne
    //method: POST
    addOne(req, res, next){

    }
}

module.exports= new NhaThueController()