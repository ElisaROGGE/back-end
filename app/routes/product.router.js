const express = require('express')
const productController = require("../controllers/product.controller.js");


const routers = express.Router()

routers.get("/", productController.findAll);
routers.post("/", productController.create);
// routers.get("/:id", controller.findOne)

module.exports = routers