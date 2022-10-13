const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");

const authRouter = require("./src/Router/auth");
const userRouter = require("./src/Router/user");
const dealRouter = require("./src/Router/deal");

// user order Route
const PayMentUserRoute = require("./src/Router/PayMentUser/PayMentUser");

// Today Sugguest
const forYouRoute = require("./src/Router/Today/forYou");
const momBabyRoute = require("./src/Router/MomBaby/MomBaby");
const oneBuyThreeRoute = require("./src/Router/OneBuyThree/OneBuyThree");
const superMarketSaleRoute = require("./src/Router/SuperMarketSale/SuperMarketSale");
const dealSaleRoute = require("./src/Router/DealSale/DealSale");
const cheaperRoute = require("./src/Router/Cheaper/Cheaper");
const newProductRoute = require("./src/Router/Newproduct/Newproduct");
const fashionNewStarRoute = require("./src/Router/Fashionnewstart/Fashionnewstart");

const passportSetup = require("./passport");
const session = require("express-session");
dotenv.config();

app.use(
	cookieSession({
		name: "session",
		keys: ["cyberwolve"],
		maxAge: 24 * 60 * 60 * 100,
	})
);

app.use(
	session({
		resave: false,
		saveUninitialized: true,
		secret: "SECRET",
	})
);

app.use(passport.initialize());
app.use(passport.session()); //

mongoose.connect(process.env.MONGOOSEDB, () => {
	console.log("Connect Mongoose");
});

app.use(express.json());
app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
);
app.use(cookieParser());

app.use("/v1/auth", authRouter);
app.use("/v1/user", userRouter);
app.use("/v1/dealhot", dealRouter);

// user Order
app.use("/v1/userorder", PayMentUserRoute);

// Today's Suggestions
app.use("/v1/foryou", forYouRoute);
app.use("/v1/mombaby", momBabyRoute);
app.use("/v1/onebuythree", oneBuyThreeRoute);
app.use("/v1/supermarketsale", superMarketSaleRoute);
app.use("/v1/dealsale", dealSaleRoute);
app.use("/v1/cheaper", cheaperRoute);
app.use("/v1/newproduct", newProductRoute);
app.use("/v1/fashionnewstart", fashionNewStarRoute);
const PORT = process.env.PORT || "3000";

app.listen(PORT, () => {
	console.log(`Example app listening on ${PORT}`);
});
