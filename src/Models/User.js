const mongoose = require("mongoose");

// UserScheme phải viết hoa

const UserScheme = new mongoose.Schema(
	{
		username: {
			type: String,
			require: true,
			unique: true,
			minlength: 6,
			maxlength: 20,
		},
		email: {
			type: String,
			require: true,

			unique: true,
			minlength: 20,
			maxlength: 50,
		},
		password: {
			type: String,
			require: true,
		},
		admin: {
			type: Boolean,
			default: false,
		},
		role: {
			type: String,
			default: false,
		},
		avatar: {
			type: String,
			default:
				"https://images.unsplash.com/photo-1660554042520-db71c7fea8d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
		},
	},
	{ timeStamp: true }
);

const letData = mongoose.model("User", UserScheme);

module.exports = letData;
