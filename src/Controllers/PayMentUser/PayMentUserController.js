const UserPayMent = require("../../Models/PayMentUser/PayMentUser");
const mongoose = require("mongoose");

const userPayMentController = {
	createOrder: async (req, res) => {
		try {
			const {
				username,
				titleProduct,
				amount,
				priceItem,
				priceTotal,
				image,
				paymentBy,
			} = req.body;

			const newOrder = await new UserPayMent({
				username,
				titleProduct,
				amount,
				priceItem,
				priceTotal,
				image,
				paymentBy,
			});

			const userOrdered = await newOrder.save();
			return res.status(200).json(userOrdered);
		} catch (error) {
			return res.status(500).json(error);
		}
	},

	getAllUserOrder: async (req, res) => {
		try {
			const usersOrder = await UserPayMent.find();
			return res.status(200).json(usersOrder);
		} catch (error) {
			return res.status(500).json(error);
		}
	},
};

module.exports = userPayMentController;
