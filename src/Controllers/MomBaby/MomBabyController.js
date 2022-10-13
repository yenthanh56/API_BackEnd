const MomBaby = require("../../Models/MomBaby/MomBaby");

const momBabyController = {
	createMomBaby: async (req, res) => {
		try {
			const newMomBaby = await new MomBaby(req.body);

			await newMomBaby.save();
			return res.status(200).json("Create successfully");
		} catch (error) {
			return res.status(500).json(error);
		}
	},

	getAllMomBaby: async (req, res) => {
		try {
			const momBaby = await MomBaby.find();
			return res.status(200).json(momBaby);
		} catch (error) {
			return res.status(200).json(error);
		}
	},
	id: async (req, res) => {
		try {
			const momBabySlug = await MomBaby.findById(req.params.id);
			return res.status(200).json(momBabySlug);
		} catch (error) {
			return res.status(500).json(500);
		}
	},
};

module.exports = momBabyController;
