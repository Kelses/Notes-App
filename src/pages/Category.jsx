import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import NoteCard from "../components/NoteCard";

const Category = () => {
  const { category } = useParams(); // Get category name from URL
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Get data from localStorage
    const storedItems = JSON.parse(localStorage.getItem("notes")) || [];
    setItems(storedItems);
  }, []);

  // Filter the items based on the category from URL
  const filteredItems = items.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );
  console.log("Filtered Items based on category:", filteredItems);

  return (
    <div className="bg-orange-50 text-white min-h-screen">
      <Navbar />
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-center mb-4">
          {category} Recipes
        </h1>
        <div
          id="items-list"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {filteredItems.length === 0 ? (
            <p className="text-center text-xl">
              No recipes found in this category.
            </p>
          ) : (
            filteredItems.map((item) => (
              <NoteCard
                key={item.id}
                itemKey={item.id}
                title={item.title}
                date={item.date}
                category={item.category}
                ingredients={item.ingredients}
                time={item.time}
                description={item.description}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
