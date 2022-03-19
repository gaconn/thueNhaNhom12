const express= require("express")
const router= express.Router();
const ChuNhaController= require("../controllers/chuNhaController")
router.get("/getAll", ChuNhaController.getAll)
router.get("/getById/:id", ChuNhaController.getById)
router.post("/addOne", ChuNhaController.addOne)
router.post('/signup', ChuNhaController.signup)
router.post('/login', ChuNhaController.login)

module.exports = router