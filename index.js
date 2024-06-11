require("dotenv").config();
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.render("index");
});

app.listen(PORT, () => {
	console.log(`Server is running on localhost:${PORT}\n`);
	try {
		mongoose.connect(process.env.DB_URL);
		console.log("Database Connected");
	} catch (e) {
		console.log("Connection Error: ", e);
	}
});
