const User = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authController = {
	register: async (req, res) => {
		try {
			const salt = await bcrypt.genSalt(10);
			const { username, email, password, cf_password } = req.body;
			const hasPass = await bcrypt.hash(password, salt);

			// create
			const newUser = await new User({
				username,
				password: hasPass,
				email,
				cf_password,
			});
			const createNewUsers = await newUser.save();

			return res.status(200).json(createNewUsers);
		} catch (error) {
			return res.status(500).json(error);
		}
	},
	login: async (req, res) => {
		try {
			const { username, password } = req.body;
			const user = await User.findOne({
				username,
			});
			const passwordValid = await bcrypt.compare(password, user.password);
			if (!user) {
				return res.status(403).json("username wrong");
			}
			if (!passwordValid) {
				return res.status(403).json("password wrong");
			}
			if (user && passwordValid) {
				const accessToken = jwt.sign(
					{
						id: user.id,
						admin: user.admin,
					},
					process.env.JWT_TOKEN_NAME,
					{ expiresIn: "20d" }
				);
				const { password, ...other } = user._doc;
				return res.status(200).json({ ...other, accessToken });
			}
		} catch (error) {
			return res.status(500).json("Request Error Wrong");
		}
	},

	logout: async (req, res) => {
		try {
			return res.status(200).json("Logout Successfully");
		} catch (error) {
			return res.status(500).json("Error Server");
		}
	},
};

module.exports = authController;
