import React from "react";

const Book = props => {
  return (
    <div>
      <h2>{props.book.title}</h2>
      <h5>{props.book.author}</h5>
      <img
        onClick={e => {
          props.bookShelfHandler(e.target);
        }}
        src={props.book.img}
        alt=""
        height="60"
        width="100"
      ></img>
      <button type="button">Add comment</button>
      <button type="button">Show comments</button>
    </div>
  );
};

export default Book;
