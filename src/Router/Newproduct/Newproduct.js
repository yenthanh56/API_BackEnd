const router = require("express").Router();
const newProductController = require("../../Controllers/Newproduct/NewproductController");

router.post("/create", newProductController.createNewProduct);
router.get("/:id", newProductController.id);
router.get("/", newProductController.getAllNewProduct);

module.exports = router;
