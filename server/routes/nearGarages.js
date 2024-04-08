const express = require("express");
const NearGarageController = require("../controllers/NearGarageController");
const router = express.Router();
router.get("/haha", NearGarageController.GetNearGaragesHaha);
router.get("", NearGarageController.GetNearGarages);
module.exports = router;