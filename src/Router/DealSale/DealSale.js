const router = require("express").Router();
const dealSaleController = require("../../Controllers/DealSale/DealSaleController");

router.post("/create", dealSaleController.createDealSale);
router.get("/:id", dealSaleController.id);
router.get("/", dealSaleController.getAllDealSale);

module.exports = router;
