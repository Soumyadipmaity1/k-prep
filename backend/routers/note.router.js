const express = require("express");
// const { login, addUser } = require("../controllers/auth.controller");
const router = express.Router();
const {addNote, getNote} = require("../controllers/addNote.controller")
// router.get("/login", login);
// router.post("/addUser", addUser);

router.post("/add_note", addNote);

router.get("/get_note/:year", getNote);


router.get("/",(req,res)=>{
    console.log("Hello World")
})








module.exports = router;

