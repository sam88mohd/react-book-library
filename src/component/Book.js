import { BookContext } from "../context/BookContext";
import { useContext } from 'react';

const Book = ({ book }) => {
  const { dispatch } = useContext(BookContext);

  return (
    <div>
    <h3>Title: {book.title}</h3>
      <p>Written by {book.author}</p>
      <p>pages: {book.page}</p>
      {book.status ? <p>Read: Already Read</p> : <p>Read: Not Yet</p>}
      <button onClick={() => dispatch({type: 'DELETE_BOOK', id: book.id})}>Delete</button>
    </div>
  );
};

export default Book;
