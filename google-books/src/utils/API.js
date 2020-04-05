import axios from "axios";

export default {
  // Gets books from the Google API
  getBooks: function(query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },
  
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData).then(result => result.data);
  },

  // Retrieves saved books from the database
  savedBooks: function() {
    return axios.get("/api/books").then(result => result.data);
  },

  // Deletes the book from the database
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id).then(result => result.data);
  }
};
