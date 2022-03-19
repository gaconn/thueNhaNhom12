const connection = require("../models/dbConnect")
const dbConnect= require("../models/dbConnect")
const generateID = require("../utils/generateID")
class NhaThueController{
    // /nhaThue/getAll
    //method: GET
    getAll(req, res, next){
        var searchTerm= req.params.searchTerm
        try {
            const query= "select * from nhathue limit ?,10";
            connection.query(query,[searchTerm*10], (error, result)=>{
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
        const id= req.param("id");
        if(!id) return res.json({success: false, message: "ID is missing!"})
        try {
            const query= "select * from nhathue where mant=?"
            dbConnect.query(query, [id], (error, result)=>{
                if(error) throw error
                if(result.length>0){
                    result[0].images= JSON.parse(result[0].images)
                    return res.json({success: true, message: "successful", result})

                }
                return res.json({success: false, message: "data not found"})
            })
        } catch (error) {
            throw error
        }
    }

    // /nhaThue/addOne
    //method: POST
    addOne(req, res, next){
        if(req.files && req.body){
            try {
                const query= "insert into nhathue(mant, tieude, macn,diachi, giathue, mota, dientich, images) values(?,?,?,?,?,?,?,?)";
                const id= generateID(10);
                var images= {images:[]};
                for(let i=0; i<req.files.length;i++){
                    images.images[i]= req.files[i].path;
                }
                var imagesJSON= JSON.stringify(images);
                const values= [id, req.body.tieude, req.body.macn, req.body.diachi, req.body.giathue, req.body.mota, req.body.dientich,imagesJSON]
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

    //nhathue/getByAddress/:district
    getByAddress(req, res, next){
        const district= req.param('district')
        if(!district) return res.json({success: false, message: "request invalid"})
        try {
            const query= 'select * from nhathue where diachi like ? '
            dbConnect.query(query, [`%${district}%`],(error, result)=>{
                if(error) throw error;
                if(result.length>0){
                    for(let i=0;i<result.length;i++){
                        result[i]["images"]= JSON.parse(result[i].images)
                    }
                    return res.json({success: true, message: "successful", result})
                }
                return res.json({success: false, message:"data not found"})
            })
        } catch (error) {
            throw error
        }
    }
    //nhaThue/getNhaThueByChuNha/:macn
    //GET
    getByChuNha(req, res, next){
        const macn= req.params.macn;
        if(!macn) return res.json({success: false, message: "missing input"})
        try {
            const query= "select * from nhathue where macn= ?"
            connection.query(query, [macn], (error, result)=>{
                if(error) throw error
                if(result.length>0){
                    for(let i=0;i<result.length;i++){
                        result[i]["images"]= JSON.parse(result[i].images)
                    }
                    return res.json({success: true, message: "successful", result})
                }
                return res.json({success: false, message: "Data not found"})
            })
        } catch (error) {
            throw error
        }
    }
    //nhaThue/delete/:mant
    //DELETE
    deleteById(req, res, next){
        const mant= req.params.mant
        if(!mant) res.json({success: false, message: "missing id"})
        try {
            const query= "delete from nhathue where mant=?"
            connection.query(query, [mant], (error, result)=>{
                if(error) throw error
                if(result.affectedRows>0) return res.json({success: true, message:"delete successful"})
                return res.json({success: false, message: "data not found. Delete not successful"})
            })
        } catch (error) {
            throw error
        }
    }
    //nhaThue/updateNhaThue
    //POST
    updateNhaThue(req, res, next){
        const info= req.body
        try {
            var images={images:info.images.split(",")}
            if(req.files){
                for(let i=0; i<req.files.length;i++){
                    images.images.push(req.files[i].path);
                }
                
            }
            var imagesInfo= JSON.stringify(images)
            const query= "update nhathue set tieude=?, diachi=?, giathue=?, dientich=?, mota=?, images=? where mant=?"
            connection.query(query, [info.tieude, info.diachi, info.giathue, info.dientich, info.mota, imagesInfo, info.mant], (error, result)=>{
                if(error) throw error
                if(result.affectedRows >0) return res.json({success: true,message:"update successful"})
                return res.json({success: false, message: "update unsuccessful"})
            }) 
        } catch (error) {
            throw error
        }
    }
}

module.exports= new NhaThueController()