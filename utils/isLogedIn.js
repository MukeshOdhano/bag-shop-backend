const jwt = require("jsonwebtoken");
const userModel = require("../model/user.model");

module.exports = async function (req, res, nex) {
	if (!req.cookies.token) {
		req.flash("error", "you need to login first");
		return res.redirect("/");
	}

	try {
		let decode = jwt.verify(req.cookies.token, process.env.JWT_KEY);
		let user = await userModel
			.findOne({ email: decode.email })
			.select("-password");
		req.user = user;
        nex();
        
	} catch (err) {
		debug(err.message);
		req.flash("Error", "something went wrong");
		req.redirect("/");
	}
};
