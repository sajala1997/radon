const express = require('express');
const moment = require('moment')
const { route } = require('express/lib/application');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", bookController.createAuthor  )

router.post("/createPublisher", bookController.createPublisher  )

router.post("/createBook", bookController.createBook  )

router.get("/getBookDetails", bookController.getBookDetails  )

router.put("/updateTrue", bookController.updateTrue  )

router.put("/addValue", bookController.addValue  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

// router.post("/createBook", bookController.createBook  )

// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)



const mid1 = function(req,res,next){
    let loggedin= true
    if(loggedin==true){
    console.log("successfully logged in")
    next()}
    else
    res.send("Login please")
}

const mid2 = function(req,res,next){
    
    
    const today =moment()
    const date= today.format()
    console.log(date)
    console.log(req.ip)
    // console.log(router.stack)
    const a = router.stack
    const out= a.pop()
    console.log(out.path)
    
   
    next()

}
// const mid3 = function(req,res,next){
    
//     console.log("hello mid3")
//     next()
// }

router.get("/createUser", mid1, mid2, authorController.createUser)


module.exports = router;