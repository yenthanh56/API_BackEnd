const Deal = require("../Models/Deal");
const dealHotController = {
	createDealHot: async (req, res) => {
		try {
			const newDealhot = await new Deal(req.body);
			// title: req.body.title,
			// image: req.body.image,
			// description: req.body.description,
			// price: req.body.price,
			// priceOld: req.body.priceOld,
			// star: req.body.star,
			// percent: req.body.percent,
			// dealhot: req.body.dealhot,
			// titleSell: req.body.titleSell,
			// sell: req.body.sell,
			// slug: req.body.slug,

			const createNewDealHot = await newDealhot.save();

			return res.status(200).json(createNewDealHot);
		} catch (error) {
			return res.status(500).json(error);
		}
	},
	getAllDealHot: async (req, res) => {
		try {
			const deals = await Deal.find();
			return res.status(200).json(deals);
		} catch (error) {
			return res.status(500).json(error);
		}
	},
	id: async (req, res) => {
		try {
			// const { id } = req.query;

			const dealsSlug = await Deal.findById(req.params.id);
			return res.status(200).json(dealsSlug);
		} catch (error) {
			return res.status(500).json(error);
		}
	},
};

module.exports = dealHotController;
