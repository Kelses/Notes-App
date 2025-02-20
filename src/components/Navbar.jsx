import { Link, useNavigate, useLocation } from "react-router"; // Make sure to import useLocation
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Hook to access current URL

  const handleAddNote = (e) => {
    e.preventDefault();
    navigate("/add-note");
  };

  return (
    <nav className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Home Link */}
        <Link to="/" className="text-2xl font-semibold">
          🍽️ Recipes
        </Link>

        {/* Conditionally render Add Recipe button */}
        {!location.pathname.includes("/add-note") && (
          <button
            onClick={handleAddNote}
            className="bg-white text-orange-600 px-4 py-2 rounded-lg font-medium hover:bg-orange-200 transition"
          >
            Add Recipe
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
