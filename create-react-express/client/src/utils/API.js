import axios from "axios";

// The getBooks method retrieves books from the server
// It accepts a "query" or term to search the book api for
export default {
  getBooks: function(query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },

  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    console.log(bookData);
    return axios.post("/api/books", bookData);
  }
};
