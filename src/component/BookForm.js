import { useState, useContext } from "react";
import { BookContext } from '../context/BookContext';

const BookForm = () => {
  const { dispatch } = useContext(BookContext);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [page, setPage] = useState("");
  const [status, setStatus] = useState(false);
  
  const onsubmit = (e) => {
    e.preventDefault();
    if (title === "" || author === "" || page === "") {
      alert("input can not be empty");
    } else {
      dispatch({type: 'ADD_BOOK', book: {title, author, page, status}});

      setTitle("");
      setAuthor("");
      setPage("");
      setStatus(false);
    }
  };

  return (
    <div>
      <h3>Add Book</h3>
      <form onSubmit={onsubmit}>
        <label htmlFor="title">
          Title:{" "}
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />{" "}
        </label>
        <label htmlFor="author">
          Author:{" "}
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />{" "}
        </label>
        <label htmlFor="page">
          Page:{" "}
          <input
            type="number"
            value={page}
            onChange={(e) => setPage(e.target.value)}
          />{" "}
        </label>
        <label htmlFor="read">
          Read Status:{" "}
          <input
            type="checkbox"
            checked={status}
            onChange={(e) => setStatus(e.currentTarget.checked)}
          />{" "}
        </label>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookForm;
