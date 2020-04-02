const path = require("path");
const router = require ("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./google");

//Route for Books mathes api/books

router.use("/books", bookRoutes);

//Route for Google matches api/books

router.use("/google", googleRoutes);

//HTML page that comes up for catch alls

router.use(function(req,res) {
    res.sendFile(path.join(__dirname, "../../client/build,index.html"))
});

module.exports = router;