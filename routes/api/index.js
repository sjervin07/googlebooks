const router = require("express").Router();
const booksRoute = require("./books");

// Books route
router.use("/books", booksRoute);

module.exports = router;
