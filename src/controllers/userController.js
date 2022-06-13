// const UserModel= require("../models/userModel")
const UserNew =require("../models/userNew")
const ProductNew= require("../models/productNew")
const OrderNew = require("../models/orderNew")
const orderNew = require("../models/orderNew")




const createProduct = async function(req,res,next){
    let data = req.body
    let saveData= await ProductNew.create(data)
    res.send({msg:saveData})
}

const createUser = async function(req,res,next){
    
    // const head=req.headers.isfreeappuser 
    // if(!head)
    // res.send("error")
    // else{
    let data = req.body
    let saveData= await UserNew.create(data)
    res.send({msg:saveData})
   
}

const createOrder =async function(req,res,next){
    
    const head=req.headers.isfreeappuser 
    if(!head)
    res.send("error")
    else{
    const data = req.body
    if(!data.productId){
        res.send("product id is required")
    }
    let product= await OrderNew.findById(data.productId)
    if(!product)
    res.send("wrong product id")
    if(!data.userId)
    res.send("user id is required")
    let user= await OrderNew.findById(data.userId)
    if(!user)
    res.send("wrong user id")
    }

    let saveData= await OrderNew.create(data)
    res.send({msg:saveData})
    
}


// const basicCode= async function(req, res, next) {
//     let tokenDataInHeaders= req.headers.token
//     console.log(tokenDataInHeaders)

//     console.log( "HEADER DATA ABOVE")
//     console.log( "hey man, congrats you have reached the Handler")
//     //res.send({ msg: "This is coming from controller (handler)"})
//     next()
//     }

// const createUser= async function (req, res) {
    
//     let data= req.body
//     let tokenDataInHeaders= req.headers.token
    //Get all headers from request
    // console.log("Request headers before modificatiom",req.headers)
    //Get a header from request
    // console.log(req.headers.batch)
    // console.log(req.headers["content-type"])
    // console.log(tokenDataInHeaders)
    //Set a header in request
    // req.headers['month']='June' //req.headers.month = "June"

    //Set an attribute in request object
    // req.anything = "everything"
    
    
    // console.log("Request headers after modificatiom",req.headers)
    
    // //Set a header in response
    // res.header('year','2022')
    // res.send({msg: "Hi"})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }

module.exports.createUser= createUser
module.exports.createProduct=createProduct
module.exports.createOrder=createOrder
// module.exports.getUsersData= getUsersData
// module.exports.basicCode= basicCode