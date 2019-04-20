import React, { Component } from "react";
import Search from "../components/Search";
import FormBtn from "../components/FormBtn";
import Card from "../components/Card";
import SaveBtn from "../components/SaveBtn";
import API from "../utils/API";

class Books extends Component {
  state = {
    books: [],
    bookSearch: "",
    id: []
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getBooks(this.state.bookSearch)
      .then(res => this.setState({ books: res.data.items }))
      .catch(err => console.log(err));
    this.setState({ bookSearch: "" });
  };
  handleSaveButton = (event, id) => {
    event.preventDefault();
    console.log(id);
    for (let i = 0; i < this.state.books.length; i++) {
      if (id === this.state.books[i].id) {
        this.setState({ id: this.state.books });
        // console.log(this.state.books[i]);
        var chosenBook = this.state.books[i];
        var booksData = {
          id: chosenBook.id,
          title: chosenBook.volumeInfo.title,
          image: chosenBook.volumeInfo.imageLinks.thumbnail,
          authors: chosenBook.volumeInfo.authors,
          description: chosenBook.volumeInfo.description,
          link: chosenBook.volumeInfo.infoLink
        };
        API.saveBook(booksData)
          .then(res => console.log(res))
          .catch(error => console.log(error.response));
        alert("This book has been saved for you!");
      }
    }
  };

  render() {
    const allBooks =
      this.state.books.length > 0 &&
      this.state.books.map(book => (
        <Card className="text-center" key={book.id}>
          <SaveBtn handleSaveButton={this.handleSaveButton} id={book.id} />
          <img
            alt={book.id}
            id={book.id}
            src={book.volumeInfo.imageLinks.thumbnail}
          />
          <h3>Title: {book.volumeInfo.title}</h3>
          <h3>Author (s): {book.volumeInfo.authors}</h3>
          <p>Description: {book.volumeInfo.description}</p>
          <a href={book.volumeInfo.infoLink}>Link</a>
        </Card>
      ));

    return (
      <div className="container">
        <br />
        <br />
        <Search
          name="bookSearch"
          value={this.state.bookSearch}
          onChange={this.handleInputChange}
        />
        <br />

        <FormBtn onClick={this.handleFormSubmit}>Submit Book</FormBtn>
        <br />
        <ul>{allBooks}</ul>
      </div>
    );
  }
}
export default Books;
