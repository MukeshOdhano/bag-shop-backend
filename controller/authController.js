const bcrypt = require("bcrypt");
const debug = require("debug")("Development: mongoose");
const userModel = require("../model/user.model");
const { generateToken } = require("../utils/generateToken");

const allUsers = async (req, res) => {
	try {
		let users = await userModel.find();
		res.status(200).send(users);
	} catch (e) {
		debug(e.message);
	}
};
const registerUser = async (req, res) => {
	try {
		const { fullname, email, password } = req.body;
		if (!fullname || !email || !password) {
			debug("something went wrong");
			return;
		}
		if (await userModel.findOne({ email })) {
			debug("this email is already used");
			res.status(401).send("this email is already used..");
			return;
		}
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(password, salt, async (err, hash) => {
				if (err) return res.send(err);
				else {
					let user = await userModel.create({
						fullname,
						email,
						password: hash,
					});
					let token = generateToken(user);
					res.cookie("token", token);
				}
			});
		});

		res.redirect("/users");
	} catch (e) {
		debug(e.message);
	}
};
const loginUser = async (req, res) => {
	const { email, password } = req.body;
	let user = await userModel.findOne({ email });
	if (!user) return res.status(404).send("email or password is incorrect");
	bcrypt.compare(password, user.password, (err, result) => {
		// if (err) return res.send(err);
		if (result) {
			let token = generateToken(user);
			res.cookie("token", token);
			res.send(user);
		} else {
			res.status(404).send("email or password is incorrect");
		}
	});
};

const logOut = async (req, res) => {
	res.cookie("token", "");
	res.redirect("/");
};

module.exports = { allUsers, registerUser, loginUser, logOut };
