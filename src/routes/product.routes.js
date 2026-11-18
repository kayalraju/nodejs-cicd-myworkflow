const express = require("express");
const Route = express.Router();

const productController = require("../controllers/product.controller");
const Validation = require("../validator");
const SchemaValidator = require("../validator/product.validator");






Route.get("/product", productController.findAll);
Route.post("/product/create",Validation.validate(SchemaValidator.CreatesProductchema), productController.create);
Route.get("/product/:id", productController.findOne);
Route.put("/product/:id",Validation.validate(SchemaValidator.CreatesProductchema), productController.update);
Route.delete("/product/:id", productController.delete);

Route.get('/testing', (req, res) => {
        res.send('This is the testing page');
    });




module.exports = Route;