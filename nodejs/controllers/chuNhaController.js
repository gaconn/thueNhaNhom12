const connection= require("../models/dbConnect")
class ChuNhaController{
    // /chuNha/getAll
    //method: GET
    getAll(req, res, next){
        try {
            const query= "select * from chunha";
            connection.query(query, (error, result)=>{
                if(error) throw error;
                if(result.length >0 )return res.json({success: true, message: "successful", result})
                return res.status(200).json({success:false, message:"data not found"})
            })
        } catch (error) {
            throw error;
        }
    }

    // /chuNha/getById/:id
    //method: GET
    getById(req, res, next){

    }

    // /chuNha/addOne
    //method: POST
    addOne(req, res, next){

    }
    
}

module.exports = new ChuNhaController();