require("./config/mongodb.connection");
const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const db_connection = require("dotenv").config();
const path = require("path");

const ownerRouter = require("./routes/ownerRouter");
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// app.get("/", (req, res) => {
// 	res.render("index");
// });

app.use("/owners", ownerRouter);
app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(PORT, () => {
	console.log(`Server is running on localhost:${PORT}\n`);
});
