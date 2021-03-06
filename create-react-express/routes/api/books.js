const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router
  .route("/") //.route("/api/books/")
  .get(booksController.findAll)
  .post(booksController.create);
// .delete(booksController.remove);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
