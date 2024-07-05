const mongoose = require("mongoose");

const ownerScehma = mongoose.Schema({
	fullname: { type: String, minLength: 3, trim: true },
	email: String,
	products: {
		type: Array,
		default: [],
	},
	picture: String,
	gstin: String,
});

module.exports = mongoose.model("owner", ownerScehma);
