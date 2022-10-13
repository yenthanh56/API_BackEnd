const moogose = require("mongoose");

const DealHotScheme = new moogose.Schema(
	{
		title: {
			type: String,
			require: true,
		},
		image: {
			type: String,
			require: true,
		},
		description: {
			type: String,
			require: true,
		},
		price: {
			type: Number,
			require: true,
		},
		priceOld: {
			type: Number,
			require: true,
		},
		star: {
			type: Number,
			require: true,
		},
		percent: {
			type: String,
			require: true,
		},
		dealhot: {
			type: String,
			require: true,
		},
		titleSell: {
			type: String,
			require: true,
		},
		sell: {
			type: Number,
			require: true,
		},
		slug: {
			type: String,
			require: true,
		},
	},
	{ timestamps: true }
);

const letData = moogose.model("Deal", DealHotScheme);

module.exports = letData;
