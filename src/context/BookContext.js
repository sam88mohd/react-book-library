import { createContext, useEffect, useReducer } from "react";
import { BookReducer } from "../reducer/BookReducer";

export const BookContext = createContext();

const BookProvider = (props) => {
  const [library, dispatch] = useReducer(BookReducer, [], () => {
    const localData = localStorage.getItem("library");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("library", JSON.stringify(library));
  });

  return (
    <BookContext.Provider value={{ library, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookProvider;
