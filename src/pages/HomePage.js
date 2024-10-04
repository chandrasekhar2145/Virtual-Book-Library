import React, { useState } from 'react';
import { bookData } from '../data';
import BookList from '../components/BookList';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  const [books, setBooks] = useState(bookData.books);
  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleSearch = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = books.filter(
      (book) =>
        book.title.toLowerCase().includes(lowerCaseQuery) ||
        book.author.toLowerCase().includes(lowerCaseQuery) ||
        book.genre.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredBooks(filtered);
  };

  return (
    <div>
      <h1>Book Library</h1>
      <SearchBar onSearch={handleSearch} />
      <BookList books={filteredBooks} />
    </div>
  );
};

export default HomePage;