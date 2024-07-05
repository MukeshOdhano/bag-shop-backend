const express = require("express");
const router = express.Router();
const {
	registerUser,
	allUsers,
	loginUser,
	logOut
} = require("../controller/authController");

router
	.get("/", allUsers)
	.post("/register", registerUser)
	.post("/login", loginUser)
	.get("/logout", logOut);

module.exports = router;
