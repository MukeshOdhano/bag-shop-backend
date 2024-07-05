const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	fullname: { type: String, minLength: 3, trim: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	// isadmin: Boolean,
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
