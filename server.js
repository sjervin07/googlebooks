const express = require("express");
const mongoose = require("mongoose");
const cors = require ("cors");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();

// Define middleware here
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API routes are here

app.use(routes);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
  {
    userCreateIndex: true,
    useNewUrlParser: true
  }
);


// // Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
