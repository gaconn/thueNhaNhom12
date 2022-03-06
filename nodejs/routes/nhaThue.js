const express= require("express")
const router= express.Router();
const NhaThueController = require("../controllers/nhaThueController")
const upload= require("../utils/uploadFiles")
router.get("/getAll", NhaThueController.getAll)
router.get("/getById/:id", NhaThueController.getById)
router.post("/addOne", upload.array("files",12), NhaThueController.addOne)

module.exports= router