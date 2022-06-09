const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const newBookModel = require("../models/newBookModel")
const newAuthorModel = require("../models/newAuthorModel")
const newPublisherModel = require("../models/newPublisherModel")

const createAuthor= async function (req, res) {
    let data = req.body
    let dataSaved = await newAuthorModel.create(data)
    res.send({data: dataSaved})
}

const createPublisher= async function (req, res) {
    let data = req.body
    let dataSaved = await newPublisherModel.create(data)
    res.send({data: dataSaved})
}

const createBook= async function (req, res) {
    let data =req.body
   if(!data.author){
       res.send("author id is required")
   }
   let author= await newAuthorModel.findById(data.author)
   console.log(author)
   if(!author){
       res.send("author detail is not valid")
   }
   if(!data.publisher){
       res.send("publisher id is required")
   }
   let publisher =await newPublisherModel.findById(data.publisher)
   console.log(publisher)
   if(!publisher){
       res.send("publisher detail is not valid")
   }
   let datasaved = await newBookModel.create(data)
   res.send({msg:datasaved})
   
   

}



const getBookDetails= async function (req,res) {
    const data = await newBookModel.find().populate('publisher')
    res.send({msg: data})
}


const updateTrue= async function(req,res){
    const a= await newPublisherModel.findOne({name :"Penguin"}).select({_id:1})
    const b= await newPublisherModel.findOne({name: "HarperCollins"}).select({_id:1})
    const data = await newBookModel.updateMany({$or:[{publisher: a},{publisher: b}]},{$set :{isHardCover: true}})
    res.send({msg: data})
}

const addValue= async function(req,res){
    const a= await newAuthorModel.find({rating:{$gt:3.5}}).select({_id:1})
    const data = await newBookModel.updateMany({author: a},{$inc :{price :10 }})
    console.log(a)
    res.send({msg:data})
}

module.exports.createAuthor= createAuthor
module.exports.createPublisher= createPublisher
module.exports.createBook=createBook
module.exports.getBookDetails=getBookDetails
module.exports.updateTrue=updateTrue
module.exports.addValue=addValue
// module.exports.getBooksData= getBooksData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
