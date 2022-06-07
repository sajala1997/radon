// const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorsModel= require("../models/AuthorsModel")
const BooksModel= require("../models/BooksModel")

const createAuthor= async function (req, res) {
        let data= req.body
    
        let savedData= await AuthorModel.create(data)
        res.send({msg: savedData})
    }

const createBook= async function (req, res) {
        let data= req.body
    
        let savedData= await BooksModel.create(data)
        res.send({msg: savedData})
    }
const bookList= async function(req,res){
        let data = await AuthorsModel.find({author_name:"Chetan Bhagat"}).select({author_id:1})
        let result = await BooksModel.find({author_id:data[0].author_id})
        res.send({msg : result})
}

const getAuthor = async function(req,res){
    let data = await BooksModel.findOneAndUpdate({name:"Two states"},{$set :{price: 100}},{new : true})
    let result = await AuthorsModel.find({author_id:data.author_id}).select({author_name : 1})
    res.send({msg : result})
}

// const getCost = async function(req,res){
//     let data = await BooksModel.find({price:{$gte:50,$lte:100}}).select({author_id:1})
    // let result= await AuthorsModel.find({author_id:data[0].author_id}).select({author_name :1})
    // res.send({msg: result})
//     for(let i=0;i<data.length;i++){
//         let result=[]
//        result= await AuthorsModel.find({author_id:data[i].author_id}).select({author_name :1})
//         res.send({msg: [result]}) 
//     }
// }











module.exports.createAuthor= createAuthor
module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getAuthor=getAuthor
module.exports.getCost= getCost


// const createBook= async function (req, res) {
//     let data= req.body

//     let savedData= await BookModel.create(data)
//     res.send({msg: savedData})
// }

// const bookList= async function (req, res) {
//     let allBooks= await BookModel.find().select({bookName : 1, authorName: 1, _id : 0})
//     res.send({msg: allBooks})
// }

// const getXINRBooks= async function (req, res) {
//     let allBooks= await BookModel.find({$or:[{"prices.indianPrice":{$eq: "Rs 100"}},{"prices.indianPrice": {$eq:"Rs 200"}},{"prices.indianPrice": {$eq:"Rs 500"}}]})
//     res.send({msg: allBooks})
// }

// const getRandomBooks= async function (req, res) {
//     let allBooks= await BookModel.find({$or:[{stockAvailable:{$eq: true}},{totalPages:{$gt : 500}}]})
//     res.send({msg: allBooks})
// }

// const getBooksInYear = async function (req, res) {
//     console.log(JSON.stringify(req.body));
//     let dataYear= req.body
//     let allBooksYears= await BookModel.find(dataYear)
//     res.send({msg: allBooksYears})
    
// }

// const getParticularBooks = async function (req, res) {
//     console.log(JSON.stringify(req.body));
//     let data= req.body
//     let allBooks= await BookModel.find(data)
//     res.send({msg: allBooks})
    
// }


   
    
    



// module.exports.createBook= createBook
// module.exports.bookList= bookList
// module.exports.getXINRBooks= getXINRBooks
// module.exports.getRandomBooks=getRandomBooks
// module.exports.getBooksInYear= getBooksInYear
// module.exports.getParticularBooks=getParticularBooks