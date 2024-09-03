const express = require("express");
const { login, addUser } = require("../controllers/auth.controller");
const router = express.Router();

router.post("/login", login);
router.post("/addUser", addUser);



module.exports = router;

