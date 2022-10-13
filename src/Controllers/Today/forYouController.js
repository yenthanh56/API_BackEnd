const ForYouToday = require("../../Models/Today/ForYou");

const forYouController = {
	createforYouToday: async (req, res) => {
		try {
			const newForYouToday = await new ForYouToday(req.body);

			await newForYouToday.save();
			return res.status(200).json("Create successfully");
		} catch (error) {
			return res.status(500).json(error);
		}
	},

	getAllForYouToday: async (req, res) => {
		try {
			const forYouToday = await ForYouToday.find();
			return res.status(200).json(forYouToday);
		} catch (error) {
			return res.status(200).json(error);
		}
	},
	id: async (req, res) => {
		try {
			const forYouSlug = await ForYouToday.findById(req.params.id);
			return res.status(200).json(forYouSlug);
		} catch (error) {
			return res.status(500).json(500);
		}
	},
};

module.exports = forYouController;
