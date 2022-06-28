const express = require("express");
const refreshController = require("../controllers/refreshController");
const router = express.Router();

router.get("/", refreshController.handleRefreshToken);

module.exports = router;
