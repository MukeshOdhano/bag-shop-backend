const router = require("express").Router();
const ownerModel = require("../model/owner.model");

if (process.env.NODE_ENV == "Development") {
	router.post("/create", async (req, res) => {
		let owners = await ownerModel.find();
		if (owners.length > 0)
			return res
				.status(500)
				.send("You don't have to permission to crete new Owner");

		let { fullname, email, password } = req.body;
		await ownerModel.create({
			fullname,
			email,
			password,
		});
		res.redirect("/owners");
	});
}

router.get("/admin", async (req, res) => {
	let success = req.flash("success");
	res.send(success);
});

module.exports = router;
