import React, { Component } from "react";
import Card from "../components/Card";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";

class Saved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedBooks: []
    };
  }

  componentWillMount() {
    API.getSavedBooks()
      .then(response => {
        this.setState({ savedBooks: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleDeleteButton = (event, id) => {
    event.preventDefault();

    API.deleteBook(id)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    this.refreshPage();
  };

  refreshPage() {
    window.location.reload();
  }

  render() {
    const allSavedBooks =
      this.state.savedBooks.length > 0 &&
      this.state.savedBooks.map(book => (
        <Card className="text-center" key={book._id}>
          <DeleteBtn
            handleDeleteButton={this.handleDeleteButton}
            id={book._id}
          />
          <img alt={book.id} id={book.id} src={book.image} />
          <h3>Title: {book.title}</h3>
          <h3>Author (s): {book.authors}</h3>
          <p>Description: {book.description}</p>
          <a href={book.link}>Link</a>
        </Card>
      ));

    return (
      <div className="container">
        <ul>{allSavedBooks}</ul>
      </div>
    );
  }
}

export default Saved;
