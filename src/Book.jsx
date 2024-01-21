import React from "react";

export const Book = ({ id, getBook }) => {
  const getTheBook = (e) => {
    e.preventDefault();
    console.log(getBook(id));
  };

  return (
    <div>
      <form onSubmit={getTheBook}>
        <h2>simple form</h2>
        <h1>What's the best guy in the world?</h1>
        <input />
        <input type="submit" />
        <hr />
      </form>
    </div>
  );
};
