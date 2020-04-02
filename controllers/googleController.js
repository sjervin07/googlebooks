const axios = require ("axios")
const db = require ("../models");

//Searches Google Books API

module.exports = {
    findAll: function (req, res) {
        const {query: params} = req;
        axios
           .get("https://www.googleapis.com/books/v1/volumes", {
               params
           })
           .then(results =>
              results.data.items.filter(
                  result =>
                  result.volumeInfo.title &&
                  result.volumeInfo.authors &&
                  result.volumeInfo.description &&
                  result.volumeInfo.image &&
                  result.volumeInfo.link
              )
           )
           .then(apiBooks =>
            db.Book.find().then(dbBooks =>
              apiBooks.filter(apiBook =>
                dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
              )
            )
          )
          .then(books => res.json(books))
          .catch(err => res.status(422).json(err));
      }

              
    };















}