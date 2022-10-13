const User = require("../Models/User");

const userController = {
	getAllUser: async (req, res) => {
		try {
			const user = await User.find();
			return res.status(200).json(user);
		} catch (error) {
			return res.status(500).json(error);
		}
	},
};

module.exports = userController;
