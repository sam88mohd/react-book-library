import Book from "./Book";
import { useContext } from "react";
import { BookContext } from "../context/BookContext";

const BookList = () => {
  const {library, dispatch} = useContext(BookContext);

  return (
    <div>
      <h2>List of book</h2>
      {library && library.map((book) => {
        return (
          <article key={book.id} onDoubleClick={() => dispatch({type: 'TOGGLE_STATUS', id: book.id})}>
            <Book book={ book }/>
          </article>
        );
      })}
    </div>
  );
};

export default BookList;
