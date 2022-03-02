const express= require("express")
const router= express.Router();
const NhaThueController = require("../controllers/nhaThueController")
router.get("/getAll", NhaThueController.getAll)
router.get("/getById/:id", NhaThueController.getById)
router.post("/addOne", NhaThueController.addOne)

module.exports= router