const NewProduct = require("../../Models/Newproduct/Newproduct");

const newProductController = {
	createNewProduct: async (req, res) => {
		try {
			const newProduct = await new NewProduct(req.body);

			await newProduct.save();
			return res.status(200).json("Create successfully");
		} catch (error) {
			return res.status(500).json(error);
		}
	},

	getAllNewProduct: async (req, res) => {
		try {
			const newProduct = await NewProduct.find();
			return res.status(200).json(newProduct);
		} catch (error) {
			return res.status(200).json(error);
		}
	},
	id: async (req, res) => {
		try {
			const newProductSlug = await NewProduct.findById(req.params.id);
			return res.status(200).json(newProductSlug);
		} catch (error) {
			return res.status(500).json(500);
		}
	},
};

module.exports = newProductController;
