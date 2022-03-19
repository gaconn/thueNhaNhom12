const chuNhaRoute= require("./chuNha")
const nhaThueRoute= require("./nhaThue")
function routes(app){
    app.use("/chuNha", chuNhaRoute);
    app.use("/nhaThue", nhaThueRoute);
}

module.exports= routes;