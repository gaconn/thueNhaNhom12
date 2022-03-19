const express= require("express")
const router= express.Router();
const NhaThueController = require("../controllers/nhaThueController")
const upload= require("../utils/uploadFiles")
router.get("/getAll/:searchTerm", NhaThueController.getAll)
router.get("/getById/:id", NhaThueController.getById)
router.post("/addOne", upload.array("files",12), NhaThueController.addOne)
router.get("/getByAddress/:district", NhaThueController.getByAddress)
router.get("/getNhaThueByChuNha/:macn", NhaThueController.getByChuNha)
router.delete("/delete/:mant", NhaThueController.deleteById)
router.post("/updateNhaThue",upload.array("files", 12), NhaThueController.updateNhaThue)
module.exports= router