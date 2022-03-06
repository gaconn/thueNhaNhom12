const express= require("express")
const app= express()
const port= 5000
const routes= require("./routes/index")
const cors= require("cors")
app.use(express.json())
app.use(cors());
routes(app);
app.use('/uploads',express.static("uploads"))
app.listen(port, ()=>{
    console.log("server listen on port "+ port);
})