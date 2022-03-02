const dbConnection= require("../models/dbConnect")
class DistrictController{
    //Get 
    // district/getAll
    getAll(req, res, next){
        try {
            const query= "select * from districts"
            dbConnection.query(query, [], (error, result)=>{
                if(error) return res.status(400).json({"success": false, "message": "db error"})
                if(result.length>0) return res.json({"success": true, "message":"successful", result})
                return res.status(404).json({"success": false, "message":"data not found"})
            })
        } catch (error) {
            return res.status(400).json({"success": false, "message": "system error"})
        }
    }
}

module.exports = new DistrictController()