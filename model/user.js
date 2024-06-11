const mongoose = require("mongoose");

mongoose.connect("");
const userSchema = mongoose.Schema({
	fullname: { type: String, minLength: 3, trim: true },
	email: String,
	password: String,
	isadmin: Boolean,
	contact: Number,
	cart: {
		type: Array,
		default: [],
	},
	orders: {
		type: Array,
		default: [],
	},
	picture: String,
});

module.exports = mongoose.model("user", userSchema);
