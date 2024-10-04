import React, { useContext } from 'react';
import { LibraryContext } from '../App';
import BookList from '../components/BookList';

const MyLibraryPage = () => {
  const { library, removeFromLibrary } = useContext(LibraryContext);

  return (
    <div>
    <div className="book-grid">
      <h1 className="my-library-title">My Library</h1>
      <BookList books={library} />
      <button onClick={() => removeFromLibrary()}>Clear Library</button>
    </div>
    </div>
  );
};

export default MyLibraryPage;