const homeRoute= require("./home")
const chuNhaRoute= require("./chuNha")
const nhaThueRoute= require("./nhaThue")
function routes(app){
    app.use("/district", homeRoute);
    app.use("/chuNha", chuNhaRoute);
    app.use("/nhaThue", nhaThueRoute);
}

module.exports= routes;