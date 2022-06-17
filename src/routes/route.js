const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.get("/cowin/getVacByDistrictId", CowinController.getVacByDistrictId)
router.post("/cowin/getOtp", CowinController.getOtp)

router.get("/weather/getweather", CowinController.getWeather)
router.get("/weather/getCityAndSort", CowinController.getCityAndSort)

router.post("/caption_image", CowinController.caption_image)



// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;