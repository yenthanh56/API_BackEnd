const mongoose = require("mongoose");

const ForYouToday = new mongoose.Schema(
	{
		image: {
			type: String,
			require: true,
		},
		freeShip: {
			type: String,
			require: true,
		},
		brand: {
			type: String,
			require: true,
		},
		title: {
			type: String,
			require: true,
		},
		rank: {
			type: Number,
			require: true,
		},
		sold: {
			type: String,
			require: true,
		},
		currentPrice: {
			type: Number,
			require: true,
		},
		salePercent: {
			type: Number,
			require: true,
		},
	},
	{ timestamps: true }
);
const letData = mongoose.model("ForYou", ForYouToday);
module.exports = letData;
