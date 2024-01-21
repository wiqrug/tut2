import React from "react";
import { Book } from "./Book";

const BookList = () => {
  const books = [
    {
      id: 1,
      title: "the best book",
      imageSrc: "text",
    },
    { id: 2, title: "The second best book", imageSrc: "httppipipi" },
    { id: 3, title: "the third best book", imageSrc: "nuggets" },
  ];

  const getBook = (id) => {
    return books.find((book) => book.id === id);
  };

  return (
    <>
      {books.map((book) => (
        <Book key={book.id} id={book.id} getBook={getBook} />
      ))}
    </>
  );
};

export default BookList;
