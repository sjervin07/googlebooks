const path = require ("path");
const router = require("express").Router();
const apiRoutes = require("./api");

//API Routes

router.use("/api", apiRoutes);

//Send to React app if no API hits

router.use((req,res) =>
res.sendFile(path.join(__dirname, "../client/build/indes.html"))
);

module.exports = router;

