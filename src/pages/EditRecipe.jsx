import { useParams, useNavigate } from "react-router";
import Navbar from "../components/Navbar"; // Import Navbar
import Footer from "../components/Footer"; // Import Footer
import Select from "react-select";
import { useState, useEffect, useContext } from "react";
import { CategoryContext } from "../App";

const EditRecipe = () => {
  const { id } = useParams(); // Get the note ID from the URL
  const navigate = useNavigate();
  const { categories } = useContext(CategoryContext); // Get categories from context
  const [note, setNote] = useState(null);
  const cats = categories.map((category) => ({
    value: category,
    label: category,
  }));

  // Load the note data from localStorage
  useEffect(() => {
    const storedNote = JSON.parse(localStorage.getItem(id));
    if (storedNote) {
      setNote(storedNote);
    } else {
      navigate("/"); // If no note found, redirect to the homepage
    }
  }, [id, navigate]);

  const handleSave = () => {
    if (note) {
      localStorage.setItem(id, JSON.stringify(note)); // Save updated note to localStorage
      navigate("/"); // Redirect back to home after saving
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const handleCategoryChange = (selectedOption) => {
    setNote((prevNote) => ({
      ...prevNote,
      category: selectedOption.value,
    }));
  };

  if (!note) return <p>Loading...</p>;

  return (
    <div className="bg-orange-100 text-black min-h-screen ">
      <Navbar /> {/* Navbar component */}
      <div className="p-6 max-w-4xl mx-auto flex-grow space-y-6">
        <h2 className="text-3xl font-bold text-center mb-12">Edit Recipe</h2>

        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={handleChange}
            className="w-full p-4 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Category</label>
          <Select
            options={cats}
            value={cats.find((cat) => cat.value === note.category)} // Set the selected category
            onChange={handleCategoryChange}
            className="w-full"
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Ingredients</label>
          <input
            type="text"
            name="ingredients"
            value={note.ingredients}
            onChange={handleChange}
            className="w-full p-4 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 "
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Time</label>
          <input
            type="text"
            name="time"
            value={note.time}
            onChange={handleChange}
            className="w-full p-4 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 "
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Description</label>
          <textarea
            name="description"
            value={note.description}
            onChange={handleChange}
            className="w-full p-4 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 h-80" // Adjust height here
          />
        </div>

        <button
          onClick={handleSave}
          className="bg-blue-700 text-white py-3 px-6 rounded-md text-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Save Changes
        </button>
      </div>
      <Footer /> {/* Footer component */}
    </div>
  );
};

export default EditRecipe;
