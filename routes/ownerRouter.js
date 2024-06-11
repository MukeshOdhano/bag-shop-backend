const router = require("express").Router();

router.get("/", (req, res) => {
	res.send("Hello Owner");
});

module.exports = router;
