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
router.get("/users/:userId",commonmw.mid, userController.getUserData)

router.put("/users/:userId", commonmw.mid, userController.updateUser)

router.delete("/deleteUser/:userId", commonmw.mid, userController.deleteUser)

module.exports = router;