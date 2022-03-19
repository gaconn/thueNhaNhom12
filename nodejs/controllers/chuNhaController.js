const connection= require("../models/dbConnect")
const generateID= require("../utils/generateID")
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
        const id= req.params.id
        if(!id) return res.json({success: false, message:"id missing"})
        try {
            const query= "select * from chunha where macn=?"
            connection.query(query, [id], (error, result)=>{
                if(error) throw error
                if(result.length>0) return res.json({success: true, message: "successful", result})
                return res.json({success: false, message: "data not found"})
            })
        } catch (error) {
            throw error
        }
    }

    // /chuNha/addOne
    //method: POST
    addOne(req, res, next){

    }
    ///chuNha/signup
    //method :POST
    signup(req, res, next){
        const info= req.body;
        if(!info) return res.json({success: false, message: "info invalid"})
        try {
            const selectQuery= "select * from chunha where username=?"
            connection.query(selectQuery,[info.username], (error, result)=>{
                if(error) throw error
                if(result.length>0){
                    return res.json({success: false, message: "Username ton tai"})
                }
                    const query= "insert into chunha(username, password, tencn, sdt, macn) values(?,?,?,?,?)"
                const macn=generateID(12);
                connection.query(query, [info.username, info.password, info.fullname, info.phonenumber, macn], (error, result)=>{
                    if(error) throw error
                    if(result.affectedRows>0){
                        return res.json({success: true, message: "successful"})
                    }
                    return res.json({success: false, message: "fail"})
                })

            })
        } catch (error) {
            throw error
        }
    }
    //post /chunha/login
    login(req, res,next){
        const info = req.body

        if(!info) return res.json({success: false, message: "info invalid"})
        try {
            const query= "select * from chunha where username=? and password =?"
            connection.query(query, [info.username, info.password], (error, result)=>{
                if(error) throw error;
                if(result.length>0) return res.json({success: true, message:"successful", result})
                return res.json({success: false, message: "username or password invalid"})
            })
        } catch (error) {
            throw error
        }
    }
}

module.exports = new ChuNhaController();