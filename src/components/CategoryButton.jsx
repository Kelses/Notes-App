import { useNavigate } from "react-router";
import { FaUtensils } from "react-icons/fa";

const categoryColors = {
  "Mediterranean Cuisine": "bg-gradient-to-r from-pink-400 to-red-500",
  "Asian Cuisine": "bg-gradient-to-r from-red-500 to-pink-400",
  "Fusion Cuisine": "bg-gradient-to-r from-pink-400 to-red-500",
  "Vegetarian Cuisine": "bg-gradient-to-r from-red-500 to-pink-400",
};

const CategoryButton = ({ cat }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/category/${cat}`);
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-2 px-5 py-3 rounded-full text-white font-semibold shadow-md transform transition 
        hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 
        ${categoryColors[cat] || "bg-gray-500"}`}
    >
      <FaUtensils className="w-5 h-5" />
      {cat.toUpperCase()}
    </button>
  );
};

export default CategoryButton;
