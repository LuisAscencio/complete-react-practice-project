import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state = {
    books: [],
    bookShelf: []
  };

  componentDidMount() {
    fetch("http://localhost:3005/books").then(response => {
      response.json().then(data => {
        this.setState({
          books: data
        });
        console.log("Books:", this.state.books);
      });
    });
  }

  bookShelfHandler = event => {
    let bookFound = this.state.books.find(book => book.img === event.src);
    if (!this.state.bookShelf.includes(bookFound)) {
      this.setState({
        bookShelf: [...this.state.bookShelf, bookFound]
        // books: [...this.state.books]
      });
    }

    console.log("yey", this.state.bookShelf, this.state.books);
  };

  render() {
    return (
      <div className="book-container">
        <BookList
          books={this.state.books}
          bookShelfHandler={this.bookShelfHandler}
        />
        <Bookshelf bookShelf={this.state.bookShelf} />
      </div>
    );
  }
}

export default App;
