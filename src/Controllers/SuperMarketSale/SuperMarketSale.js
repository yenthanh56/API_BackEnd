const SuperMarketSale = require("../../Models/SuperMarketSale/SuperMarketSale");

const superMarketSaleController = {
	createSuperMarket: async (req, res) => {
		try {
			const newSuperMarketSale = await new SuperMarketSale(req.body);

			await newSuperMarketSale.save();
			return res.status(200).json("Create successfully");
		} catch (error) {
			return res.status(500).json(error);
		}
	},

	getAllSuperMarket: async (req, res) => {
		try {
			const superMarketSale = await SuperMarketSale.find();
			return res.status(200).json(superMarketSale);
		} catch (error) {
			return res.status(200).json(error);
		}
	},
	id: async (req, res) => {
		try {
			const superMarketSaleSlug = await SuperMarketSale.findById(
				req.params.id
			);
			return res.status(200).json(superMarketSaleSlug);
		} catch (error) {
			return res.status(500).json(500);
		}
	},
};

module.exports = superMarketSaleController;
