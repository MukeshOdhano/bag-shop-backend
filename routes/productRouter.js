const router = require("express").Router();
const productModel = require("../model/product");

router
	.get("/", (req, res) => {
		res.send("Products");
	})
    .post("/", (req, res) => {
        
    });

module.exports = router;
