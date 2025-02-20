import { useState, useEffect } from "react";
import { FaUtensils } from "react-icons/fa"; // Import the icon for styling buttons
import NoteCard from "../components/NoteCard";

const categoryColors = {
  "Mediterranean Cuisine": "bg-gradient-to-r from-pink-400 to-red-500",
  "Asian Cuisine": "bg-gradient-to-r from-red-500 to-pink-400",
  "Fusion Cuisine": "bg-gradient-to-r from-pink-400 to-red-500",
  "Vegetarian/Vegan Cuisine": "bg-gradient-to-r from-red-500 to-pink-400",
  "All Recipes": "bg-gradient-to-r from-pink-400 to-red-500",
};

const Notes = () => {
  const [notes, setNotes] = useState({});
  const [categoryFilter, setCategoryFilter] = useState(""); // New state for category filter
  const [filteredNotes, setFilteredNotes] = useState([]);

  const getAllItemsFromLocalStorage = () => {
    const items = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      try {
        const value = JSON.parse(localStorage.getItem(key)); // Try parsing JSON
        if (value) items[key] = { ...value, id: key };
      } catch (error) {
        console.error(`Error parsing item ${key}:`, error);
      }
    }
    return items;
  };

  useEffect(() => {
    const allNotes = getAllItemsFromLocalStorage();
    console.log("Loaded notes from localStorage:", allNotes);
    setNotes(allNotes); // Load data on mount
  }, []);

  useEffect(() => {
    // Filter notes based on categoryFilter
    if (categoryFilter) {
      const filtered = Object.values(notes).filter(
        (note) => note.category.toLowerCase() === categoryFilter.toLowerCase()
      );
      setFilteredNotes(filtered);
    } else {
      setFilteredNotes(Object.values(notes)); // Show all notes if no category is selected
    }
  }, [categoryFilter, notes]); // Run the filter whenever categoryFilter or notes change

  const onDelete = (key) => {
    console.log("Delete from LS:", key);
    if (!key) return; // Prevent errors

    localStorage.removeItem(key); // Remove from localStorage
    setNotes((prevNotes) => {
      const updatedNotes = { ...prevNotes };
      delete updatedNotes[key]; // Remove from state
      return updatedNotes; // Update state
    });
  };

  const onEdit = () => {};

  return (
    <div>
      {/* Category Filter Buttons */}
      <div className="flex justify-center gap-6 mb-8 flex-wrap">
        <button
          onClick={() => setCategoryFilter("Asian Cuisine")}
          className={`flex items-center gap-3 px-6 py-4 rounded-full text-white font-semibold shadow-md transform transition hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${categoryColors["Asian Cuisine"]}`}
        >
          <FaUtensils className="w-6 h-6" />
          Asian Cuisine
        </button>
        <button
          onClick={() => setCategoryFilter("Fusion Cuisine")}
          className={`flex items-center gap-3 px-6 py-4 rounded-full text-white font-semibold shadow-md transform transition hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${categoryColors["Fusion Cuisine"]}`}
        >
          <FaUtensils className="w-6 h-6" />
          Fusion Cuisine
        </button>
        <button
          onClick={() => setCategoryFilter("Mediterranean Cuisine")}
          className={`flex items-center gap-3 px-6 py-4 rounded-full text-white font-semibold shadow-md transform transition hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${categoryColors["Mediterranean Cuisine"]}`}
        >
          <FaUtensils className="w-6 h-6" />
          Mediterranean Cuisine
        </button>
        <button
          onClick={() => setCategoryFilter("Vegetarian/Vegan Cuisine")}
          className={`flex items-center gap-3 px-6 py-4 rounded-full text-white font-semibold shadow-md transform transition hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${categoryColors["Vegetarian/Vegan Cuisine"]}`}
        >
          <FaUtensils className="w-6 h-6" />
          Vegetarian/Vegan Cuisine
        </button>
        <button
          onClick={() => setCategoryFilter("")}
          className={`flex items-center gap-3 px-6 py-4 rounded-full text-white font-semibold shadow-md transform transition hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${categoryColors["All Recipes"]}`}
        >
          <FaUtensils className="w-6 h-6" />
          All Recipes
        </button>
      </div>

      {/* Render filtered notes */}
      <div
        id="items-list"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4"
      >
        {filteredNotes.length === 0 ? (
          <p className="text-center text-xl">
            No recipes found in this category.
          </p>
        ) : (
          filteredNotes.map((item) => (
            <NoteCard
              key={item.id} // React key remains for rendering list
              itemKey={item.id} // Pass the key explicitly as a prop to NoteCard
              title={item.title}
              date={item.date}
              category={item.category}
              description={item.description}
              ingredients={item.ingredients} // New field
              time={item.time} // New field
              onEdit={() => onEdit(item.id)}
              onDelete={() => onDelete(item.id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Notes;
