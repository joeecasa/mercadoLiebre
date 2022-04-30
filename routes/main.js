const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController")



// estos dos se usan su queremos tener otro controlador, en este caso user
// const userRoutes = require ("./user")
// router.use("/", userRoutes)




router.get("/", mainController.main)
router.get("/login", mainController.login)
router.get("/registro", mainController.register)




module.exports = router

