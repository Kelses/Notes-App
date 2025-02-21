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
    <div className="bg-[#FAF3E0] text-black min-h-screen">
      <Navbar /> {/* Navbar component */}
      <div className="p-8 max-w-4xl mx-auto flex-grow space-y-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#5C4033]">
          Edit Recipe
        </h2>

        <div className="mb-6">
          <label className="block text-lg font-medium mb-2 text-[#5C4033]">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={handleChange}
            className="w-full p-4 rounded-md border border-[#C19A6B] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C19A6B]"
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium mb-2 text-[#5C4033]">
            Category
          </label>
          <Select
            options={cats}
            value={cats.find((cat) => cat.value === note.category)} // Set the selected category
            onChange={handleCategoryChange}
            className="w-full"
            styles={{
              control: (styles) => ({
                ...styles,
                borderColor: "#C19A6B",
                boxShadow: "none",
                "&:hover": {
                  borderColor: "#C19A6B",
                },
              }),
            }}
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium mb-2 text-[#5C4033]">
            Ingredients
          </label>
          <input
            type="text"
            name="ingredients"
            value={note.ingredients}
            onChange={handleChange}
            className="w-full p-4 rounded-md border border-[#C19A6B] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C19A6B]"
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium mb-2 text-[#5C4033]">
            Time
          </label>
          <input
            type="text"
            name="time"
            value={note.time}
            onChange={handleChange}
            className="w-full p-4 rounded-md border border-[#C19A6B] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C19A6B]"
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium mb-2 text-[#5C4033]">
            Description
          </label>
          <textarea
            name="description"
            value={note.description}
            onChange={handleChange}
            className="w-full p-4 rounded-md border border-[#C19A6B] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C19A6B] h-80"
          />
        </div>

        <button
          onClick={handleSave}
          className="bg-[#C19A6B] text-white py-3 px-6 rounded-md text-lg hover:bg-[#5C4033] focus:outline-none focus:ring-2 focus:ring-[#C19A6B]"
        >
          Save Changes
        </button>
      </div>
      <Footer /> {/* Footer component */}
    </div>
  );
};

export default EditRecipe;
