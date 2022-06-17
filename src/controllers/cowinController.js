let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}




let getVacByDistrictId = async function (req, res) {
    try {
        let dis = req.query.district_id
        let date = req.query.date
        console.log(`query params are: ${dis} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${dis}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}





let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}




let getWeather = async function (req, res) {
    try {
        let place = req.query.q
        let id = req.query.appid
        console.log(`query params are: ${place} ${id}`)
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${id}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ city: place, msg: result.data.main.temp })
        // const a= result.data
        // const b= a.main.temp
        // console.log(b)
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



let getCityAndSort = async function (req, res) {
    try {

        let cities= ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let newArr=[]
        
        // let id = req.query.appid
        // res.status(200).send({ city: place, msg: result.data.main.temp })
    
        for(let i=0;i<cities.length;i++){
            let object = {city : cities[i] }
            let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=fd1540ea0f156fc80f90ad75fba78ca1`)
            object.temp= result.data.main.temp
            newArr.push(object)


        }
        let sortArr = newArr.sort(function(a,b){
           return a.temp- b.temp
        })
        res.status(200).send({status :true, data: sortArr })



        
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let caption_image = async function (req, res) {
    try {
        let template_id = req.query.template_id
        let text0= req.query.text0
        let text1= req.query.text1
        let username= req.query.username
        let password= req.query.password
        
        // console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`,
            // data: 
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}








module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getVacByDistrictId=getVacByDistrictId

module.exports.getWeather=getWeather
module.exports.getCityAndSort= getCityAndSort

module.exports.caption_image=caption_image