import { Link, useNavigate, useLocation } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddNote = (e) => {
    e.preventDefault();
    navigate("/add-note");
  };

  return (
    <nav className="bg-[#D2B48C] text-[#5C4033] shadow-lg border-b border-[#C19A6B]">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Home Link */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          🍽️ <span className="text-[#5C4033]">Recipes</span>
        </Link>

        {/* Conditionally render Add Recipe button */}
        {!location.pathname.includes("/add-note") && (
          <button
            onClick={handleAddNote}
            className="text-[#5C4033] bg-[#F5EDE0] px-4 py-2 rounded-lg font-medium hover:bg-[#C19A6B] hover:text-white transition border border-[#C19A6B]"
          >
            Add Recipe
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
