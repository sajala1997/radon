// const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const bookList= async function (req, res) {
    let allBooks= await BookModel.find().select({bookName : 1, authorName: 1, _id : 0})
    res.send({msg: allBooks})
}

const getXINRBooks= async function (req, res) {
    let allBooks= await BookModel.find({$or:[{"prices.indianPrice":{$eq: "Rs 100"}},{"prices.indianPrice": {$eq:"Rs 200"}},{"prices.indianPrice": {$eq:"Rs 500"}}]})
    res.send({msg: allBooks})
}

const getRandomBooks= async function (req, res) {
    let allBooks= await BookModel.find({$or:[{stockAvailable:{$eq: true}},{totalPages:{$gt : 500}}]})
    res.send({msg: allBooks})
}

const getBooksInYear = async function (req, res) {
    console.log(JSON.stringify(req.body));
    let dataYear= req.body
    let allBooksYears= await BookModel.find(dataYear)
    res.send({msg: allBooksYears})
    
}

const getParticularBooks = async function (req, res) {
    console.log(JSON.stringify(req.body));
    let data= req.body
    let allBooks= await BookModel.find(data)
    res.send({msg: allBooks})
    
}


   
    
    



module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks=getRandomBooks
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks=getParticularBooks