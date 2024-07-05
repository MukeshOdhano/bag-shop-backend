const router = require("express").Router();
const isLogedIn = require("../utils/isLogedIn");

router.get("/", (req, res) => {
	let error = req.flash("error");
	res.send("ERROR: ", error);
});

router.get("/shop", isLogedIn, (req, res) => {
	res.send("SHOP");
});
router.get("/logout", isLogedIn, (req, res) => {
	res.send("logedOUt");
});

module.exports = router;
