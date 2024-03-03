const express = require("express");
const loginController = require("../../controller/userController/login");
const router = express.Router();

router.get("/", loginController.getLogin);

module.exports = router;
