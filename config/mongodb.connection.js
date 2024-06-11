require("dotenv").config();
const mongoose = require("mongoose");

mongoose
	.connect(process.env.DB_URL)
	.then(() => {
		console.log("Database Connected");
	})
	.catch((e) => {
		console.log("Connection Error: ", e);
	});

module.exports = mongoose.connection;
