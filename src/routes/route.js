const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const commonmw = require("../middleware/middleware")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", commonmw.authenticate,    commonmw.authorised, userController.getUserData)

router.put("/users/:userId", commonmw.authenticate, commonmw.authorised, userController.updateUser)

router.delete("/deleteUser/:userId", commonmw.authenticate,  commonmw.authorised, userController.deleteUser)

module.exports = router;