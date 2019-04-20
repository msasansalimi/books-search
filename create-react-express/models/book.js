const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  id: { type: String, required: true },
  image: { type: String },
  link: { type: String },
  title: { type: String },
  authors: { type: Array },
  description: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
