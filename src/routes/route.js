const express = require('express');
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

module.exports = router;