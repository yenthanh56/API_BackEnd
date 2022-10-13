const Search = require("../../Models/Search/Search");

const searchUtils = {};

searchUtils.searchPost = async (title) => {
	try {
		let result = [];
		if (title) {
			// Even you can perform regex in your search
			result = await Search.find({ title: title });
		}
		return result;
	} catch (err) {
		const errorObj = { code: 500, error: "Internal server error" }; // It can be dynamic
		throw errorObj;
	}
};

module.exports = searchUtils;
