const mongoose = require("mongoose");

const SearchTitle = new mongoose.Schema(
	{
		title: {
			type: String,
			require: true,
		},
		image: {
			type: String,
			require: true,
		},
	},
	{ timestamps: true }
);

const letData = mongoose.model("Search", SearchTitle);

module.exports = letData;
