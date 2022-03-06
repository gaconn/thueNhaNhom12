const connection = require("../models/dbConnect")
const dbConnect= require("../models/dbConnect")
const generateID = require("../utils/generateID")
class NhaThueController{
    // /nhaThue/getAll
    //method: GET
    getAll(req, res, next){
        try {
            const query= "select * from nhaThue"
            connection.query(query, (error, result)=>{
                if(error) throw error
                if(result.length>0){
                    for(let i=0;i<result.length;i++){
                        result[i]["images"]= JSON.parse(result[i].images)
                    }
                    return res.json({success: true, message:"successful", result})
                }
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
        if(req.files && req.body){
            try {
                const query= "insert into nhathue(mant, tieude, macn,diachi, giathue, mota, dientich, images) values(?,?,?,?,?,?,?,?)";
                const id= generateID(10);
                const macn="0001"
                var images= {images:[]};
                for(let i=0; i<req.files.length;i++){
                    images.images[i]= req.files[i].path;
                }
                var imagesJSON= JSON.stringify(images);
                const values= [id, req.body.tieude, macn, req.body.diachi, req.body.giathue, req.body.mota, req.body.dientich,imagesJSON]
                dbConnect.query(query, values, (error, result)=>{
                    if(error) throw error
                    if(result.affectedRows>0) return res.json({"success": true, message: "successful"})
                    return res.json({"success": false, message:"unable to insert data"})
                })
            } catch (error) {
                throw error
            } finally{
            }
        }else{
            return res.status(500).json({"success": false, message: "data invalid"})
        }
    }
}

module.exports= new NhaThueController()