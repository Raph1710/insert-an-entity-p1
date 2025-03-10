import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddBook.css";

const AddBook = () => {
  const navigate = useNavigate(); // For navigation
  const [book, setBook] = useState({
    title: "",
    author: "",
    description: "",
    coverImage: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  // Handle form submission (placeholder function)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Book Added:", book);
    navigate("/"); // Navigate back to Home after submission
  };

  return (
    <div className="add-book-container">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit} className="add-book-form">
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Author:
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Description:
          <textarea
            name="description"
            value={book.description}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Cover Image URL:
          <input
            type="url"
            name="coverImage"
            value={book.coverImage}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Submit</button>
      </form>
      
      <button onClick={() => navigate("/")}>Cancel</button> {/* Navigate back to Home */}
    </div>
  );
};

export default AddBook;