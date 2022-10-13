const router = require("express").Router();
const superMarketSale = require("../../Controllers/SuperMarketSale/SuperMarketSale");

router.post("/create", superMarketSale.createSuperMarket);
router.get("/:id", superMarketSale.id);
router.get("/", superMarketSale.getAllSuperMarket);

module.exports = router;
