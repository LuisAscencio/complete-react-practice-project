import React, { Component } from "react";
import Form from "../components/Form";
import Book from "../components/Book";

const BookList = props => {
  return (
    <div className="book-list">
      <h1>Book List</h1>
      <Form />
      <ul>
        {props.books.map(book => {
          return <Book key={book.id} book={book} />;
        })}
      </ul>
    </div>
  );
};

export default BookList;
