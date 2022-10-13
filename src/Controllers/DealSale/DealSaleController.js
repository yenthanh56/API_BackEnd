const DealSale = require("../../Models/DealSale/DealSale");

const dealSaleController = {
	createDealSale: async (req, res) => {
		try {
			const newDealSale = await new DealSale(req.body);

			await newDealSale.save();
			return res.status(200).json("Create successfully");
		} catch (error) {
			return res.status(500).json(error);
		}
	},

	getAllDealSale: async (req, res) => {
		try {
			const dealSale = await DealSale.find();
			return res.status(200).json(dealSale);
		} catch (error) {
			return res.status(200).json(error);
		}
	},
	id: async (req, res) => {
		try {
			const dealSaleSlug = await DealSale.findById(req.params.id);
			return res.status(200).json(dealSaleSlug);
		} catch (error) {
			return res.status(500).json(500);
		}
	},
};

module.exports = dealSaleController;
