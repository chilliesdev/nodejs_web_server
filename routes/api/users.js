const express = require("express");
const router = express.Router();
const { Admin } = require("../../config/roles_list");
const userController = require("../../controllers/userController");
const verifyRoles = require("../../middleware/verifyRoles");

router("/").get(verifyRoles(Admin), userController.getAllUsers);

module.exports = router;
