const OneBuyThree = require("../../Models/OneBuyThree/OneBuyThree");

const oneBuyThreeController = {
	createOneBuyThree: async (req, res) => {
		try {
			const newOneBuyThree = await new OneBuyThree(req.body);
			await newOneBuyThree.save();
			return res.status(200).json("create successfully");
		} catch (error) {
			return res.status(500).json(error);
		}
	},

	getAllOneBuyThree: async (req, res) => {
		try {
			const oneBuyThree = await OneBuyThree.find();
			return res.status(200).json(oneBuyThree);
		} catch (error) {
			return res.status(500).json(200);
		}
	},

	id: async (req, res) => {
		try {
			const oneBuyThree = await OneBuyThree.findById(req.params.id);
			return res.status(200).json(oneBuyThree);
		} catch (error) {
			return res.status(500).json(error);
		}
	},
};

module.exports = oneBuyThreeController;
