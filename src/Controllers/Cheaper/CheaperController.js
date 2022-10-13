const Cheaper = require("../../Models/Cheaper/Cheaper");

const cheaperController = {
	createCheaper: async (req, res) => {
		try {
			const newCheaper = await new Cheaper(req.body);

			await newCheaper.save();
			return res.status(200).json("Create successfully");
		} catch (error) {
			return res.status(500).json(error);
		}
	},

	getAllCheaper: async (req, res) => {
		try {
			const cheaper = await Cheaper.find();
			return res.status(200).json(cheaper);
		} catch (error) {
			return res.status(200).json(error);
		}
	},
	id: async (req, res) => {
		try {
			const cheaperSlug = await Cheaper.findById(req.params.id);
			return res.status(200).json(cheaperSlug);
		} catch (error) {
			return res.status(500).json(500);
		}
	},
};

module.exports = cheaperController;
