const router = require ("express").Router();
const booksController = require("../../controllers/booksController.js");

//Finds "api/books"

router
.route("/")
.get(booksController.findAll)
.post(booksController.create);

//Finds "api/books/:id"

router
.route("/:id")
.get(booksController.findById)
.update(booksController.update)
.delete(booksController.remove);

module.exports = router;