const router = require("express").Router();
const upload = require("../config/multer-config");

const { allProduct, postProduct } = require("../controller/productControll");

router
	.get("/", allProduct)
	.post("/create", upload.single("image"), postProduct);

module.exports = router;
