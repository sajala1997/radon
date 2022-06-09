const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser  )



router.post("/createAuthor", BookController.createAuthor  )

router.post("/createBook", BookController.createBook  )

router.get("/bookList", BookController.bookList  )

router.get("/getAuthor", BookController.getAuthor)

router.get("/getCost", BookController.getCost)

router.get("/books_by_authorid/:id", BookController.books_by_authorid)

router.get("/get_authors_by_age", BookController.get_authors_by_age)

// router.post("/createBook", BookController.createBook  )

// router.get("/bookList", BookController.bookList  )

// router.get("/getXINRBooks", BookController.getXINRBooks)

// router.get("/getRandomBooks", BookController.getRandomBooks)

// router.post("/getBooksInYear", BookController.getBooksInYear)

// router.post("/getParticularBooks", BookController.getParticularBooks)



module.exports = router;