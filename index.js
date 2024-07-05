require("dotenv").config();
require("./config/mongodb.connection");
const express = require("express");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const flash = require("connect-flash");
const db_connection = require("dotenv").config();
const path = require("path");

const ownerRouter = require("./routes/ownerRouter");
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");
const shopRouter = require("./routes/index");

const app = express();
const PORT = process.env.PORT || 3001;

app.set("view engine", "ejs");
app.use(
	expressSession({
		resave: false,
		saveUninitialized: false,
		secret: process.env.EXPRESS_SESSION_SECRET,
	})
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(flash());

app.use("/", shopRouter);
app.use("/owners", ownerRouter);
app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(PORT, () => {
	console.log(`Server is running on localhost:${PORT}\n`);
});
