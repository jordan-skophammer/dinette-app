const router = require("express").Router();
const restaurantRoutes = require("./restaurants");
const searchLocation = require("./searchLocation");

router.use("/restaurants", restaurantRoutes);
router.use("/searchLocation", searchLocation);

module.exports = router;