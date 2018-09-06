const router = require("express").Router();
const api1 = require("./api1");
const api2 = require("./api2");

router.use("/api1", api1);
router.use("/api2", api2);

module.exports = router;
