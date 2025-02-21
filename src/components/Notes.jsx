import { useState, useEffect } from "react";
import { FaUtensils } from "react-icons/fa";
import NoteCard from "../components/NoteCard";

const categoryColors = {
  "Mediterranean Cuisine": "bg-[#D2B48C] hover:bg-[#C19A6B]",
  "Asian Cuisine": "bg-[#D2B48C] hover:bg-[#C19A6B]",
  "Fusion Cuisine": "bg-[#D2B48C] hover:bg-[#C19A6B]",
  "Vegetarian/Vegan Cuisine": "bg-[#D2B48C] hover:bg-[#C19A6B]",
  "All Recipes": "bg-[#D2B48C] hover:bg-[#C19A6B]",
};

const Notes = () => {
  const [notes, setNotes] = useState({});
  const [categoryFilter, setCategoryFilter] = useState(""); //  state for category filter
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [categoryText, setCategoryText] = useState(
    "Discover Delicious Recipes From Every Corner of the World"
  ); // New state for category-specific text

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
      setCategoryText(`Check Our Delicious ${categoryFilter} Recipes`); // Update text when category is selected
    } else {
      setFilteredNotes(Object.values(notes)); // Show all notes if no category is selected
      setCategoryText(
        "Discover Delicious Recipes From Every Corner of the World"
      ); // Default text
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
    <div className="bg-[#F5EDE0] min-h-screen p-6 text-[#5C4033]">
      {/* Category Filter Buttons */}
      <div className="flex justify-center gap-6 mb-8 flex-wrap">
        {Object.keys(categoryColors).map((category) => (
          <button
            key={category}
            onClick={() =>
              setCategoryFilter(category === "All Recipes" ? "" : category)
            }
            className={`flex items-center gap-3 px-6 py-4 rounded-full font-semibold shadow-md transform transition hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${categoryColors[category]}`}
          >
            <FaUtensils className="w-6 h-6" />
            {category}
          </button>
        ))}
      </div>

      {/* Dynamic Heading */}
      <h2 className="text-center text-5xl font-bold text-[#5C4033] mt-4 mb-16">
        {categoryText}
      </h2>

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
              key={item.id}
              itemKey={item.id}
              title={item.title}
              date={item.date}
              category={item.category}
              description={item.description}
              ingredients={item.ingredients}
              time={item.time}
              onEdit={() => onEdit(item.id)}
              onDelete={() => onDelete(item.id)}
              className="bg-[#FAF3E0] p-4 rounded-lg shadow-md"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Notes;
