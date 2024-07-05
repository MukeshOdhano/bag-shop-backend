const productModel = require("../model/product.model");

const allProduct = async (req, res) => {
	res.send("Products");
};

const postProduct = async (req, res) => {
	try {
		let { name, price, discount, bgColor, panelColor, textColor } = req.body;
		let product = await productModel.create({
			image: req.file.buffer,
			name,
			price,
			discount,
			bgColor,
			panelColor,
			textColor,
		});

		req.flash("success");
		// res.redirect("/owners/admin");
		res.send(product);
	} catch (e) {
		res.send("error", err.message);
	}
};

module.exports = { allProduct, postProduct };
