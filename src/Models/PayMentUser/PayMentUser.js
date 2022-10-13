const mongoose = require("mongoose");

const UserPayMent = new mongoose.Schema(
	{
		username: { type: String },
		titleProduct: [
			{
				type: String,
				require: true,
				unique: true,
			},
		],
		amount: [
			{
				type: Number,
				require: true,
			},
		],
		priceItem: [
			{
				type: String,
				require: true,
			},
		],
		priceTotal: {
			type: String,
			require: true,
		},
		image: [
			{
				type: String,
				require: true,
			},
		],
		paymentBy: {
			type: String,
			require: true,
		},
	},
	{ timestamps: true }
);

// const letData = mongoose.model("UserPayMent", UserPayMent);
const UserDataOrder = mongoose.model("UserPayMent", UserPayMent);
module.exports = UserDataOrder;
