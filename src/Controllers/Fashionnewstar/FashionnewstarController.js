const FashionNew = require("../../Models/Fashionnewstart/Fashionnewstart");

const fashionNewStarController = {
	createFashionNewStar: async (req, res) => {
		try {
			const newFashionNewStar = await new FashionNew(req.body);

			await newFashionNewStar.save();
			return res.status(200).json("Create successfully");
		} catch (error) {
			return res.status(500).json(error);
		}
	},

	getAllFashionNewStar: async (req, res) => {
		try {
			const fashionNewStar = await FashionNew.find();
			return res.status(200).json(fashionNewStar);
		} catch (error) {
			return res.status(200).json(error);
		}
	},
	id: async (req, res) => {
		try {
			const fashionNewStarSlug = await FashionNew.findById(req.params.id);
			return res.status(200).json(fashionNewStarSlug);
		} catch (error) {
			return res.status(500).json(500);
		}
	},
};

module.exports = fashionNewStarController;
