const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController")

const userRoutes = require ("./user")

router.get("/", mainController.main)

router.use("/", userRoutes)


module.exports = router

