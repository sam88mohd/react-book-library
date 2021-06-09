import BookProvider from './context/BookContext';
import BookList from "./component/BookList";
import BookForm from './component/BookForm';

function App() {

  return (
    <BookProvider>
    <div className="App">
      <h1>Library</h1>
      <BookForm/>
      <BookList/>
    </div>
    </BookProvider>
  );
}

export default App;
