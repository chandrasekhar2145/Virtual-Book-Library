import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { bookData } from '../data';
import { LibraryContext } from '../App';

const BookDetailsPage = () => {
  const { id } = useParams();
  const { addToLibrary } = useContext(LibraryContext);
  const book = bookData.books.find((book) => book.id === parseInt(id));

  if (!book) return <p>Book not found</p>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Rating: {book.rating}</p>
      <p>{book.description}</p>
      <p>Publication Year: {book.publication_year}</p>
      <button onClick={() => addToLibrary(book)}>Add to My Library</button>
    </div>
  );
};

export default BookDetailsPage;