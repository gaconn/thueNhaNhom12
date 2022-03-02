const express= require("express")
const router= express.Router()
const districtController= require("../controllers/districtController.js")

router.get("/getAll", districtController.getAll);

module.exports= router