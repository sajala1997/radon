const AuthorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

const getAuthorsData= async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({data: authors})
}


const createUser= async function(req,res){
    console.log("congrats reached handler")
    res.send("coming from handler")
}

module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData
module.exports.createUser=createUser