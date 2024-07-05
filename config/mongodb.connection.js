const mongoose = require("mongoose");
const config = require("config")
const debug = require("debug")("Development: mongoose");

mongoose
	.connect(process.env.DB_URL)
	.then(() => {
		debug("Database Connected");
	})
	.catch((e) => {
		debug("Connection Error: ", e);
	});

module.exports = mongoose.connection;
