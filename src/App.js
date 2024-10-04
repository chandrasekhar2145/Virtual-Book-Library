import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookDetailsPage from './pages/BookDetailsPage';
import MyLibraryPage from './pages/MyLibraryPage';
import './App.css';

export const LibraryContext = createContext();

const App = () => {
  const [library, setLibrary] = useState([]);

  const addToLibrary = (book) => {
    setLibrary((prev) => [...prev, book]);
  };

  const removeFromLibrary = (book) => {
    setLibrary([]);
  };

  return (
    <LibraryContext.Provider value={{ library, addToLibrary, removeFromLibrary }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books/:id" element={<BookDetailsPage />} />
          <Route path="/my-library" element={<MyLibraryPage />} />
        </Routes>
      </Router>
    </LibraryContext.Provider>
  );
};

export default App;