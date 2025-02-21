import { useNavigate } from "react-router";
import {
  FaCalendarAlt,
  FaUtensils,
  FaClock,
  FaList,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const NoteCard = ({
  itemKey,
  title,
  date,
  category,
  ingredients,
  time,
  description,
  onEdit,
  onDelete,
}) => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Handle the "Edit" button click
  const handleEditClick = () => {
    navigate(`/edit/${itemKey}`); // Navigate to the edit page with itemKey
  };

  return (
    <div className="bg-[#E2C9A8] text-[#5C4033] rounded-xl p-6 shadow-lg border border-[#5C4033]">
      {/* Title */}
      <h2 className="text-2xl font-bold text-center border-b border-[#5C4033] pb-2">
        {title}
      </h2>

      {/* Metadata */}
      <div className="text-sm mt-4 space-y-3">
        <div className="flex items-center gap-2 bg-[#5C4033]/20 p-2 rounded-md border border-[#5C4033]">
          <FaCalendarAlt className="text-[#5C4033]" />
          <span className="opacity-90">
            <span className="font-semibold">Date:</span> {date}
          </span>
        </div>

        <div className="flex items-center gap-2 bg-[#5C4033]/20 p-2 rounded-md border border-[#5C4033]">
          <FaUtensils className="text-[#5C4033]" />
          <span className="opacity-90">
            <span className="font-semibold">Category:</span> {category}
          </span>
        </div>

        <div className="flex items-center gap-2 bg-[#5C4033]/20 p-2 rounded-md border border-[#5C4033]">
          <FaList className="text-[#5C4033]" />
          <span className="opacity-90">
            <span className="font-semibold">Ingredients:</span> {ingredients}
          </span>
        </div>

        <div className="flex items-center gap-2 bg-[#5C4033]/20 p-2 rounded-md border border-[#5C4033]">
          <FaClock className="text-[#5C4033]" />
          <span className="opacity-90">
            <span className="font-semibold">Time:</span> {time}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm mt-4 bg-[#5C4033]/10 p-3 rounded-md border border-[#5C4033]">
        {description}
      </p>

      {/* Buttons */}
      <div className="flex justify-end gap-3 mt-5">
        <button
          className="p-3 bg-[#5C4033] hover:bg-[#C19A6B] text-white rounded-full transition"
          onClick={handleEditClick}
          aria-label="Edit Note"
        >
          <FaEdit className="w-5 h-5" />
        </button>
        <button
          className="p-3 bg-red-700 hover:bg-red-800 text-white rounded-full transition"
          onClick={() => {
            console.log("Deleting item with key:", itemKey);
            if (itemKey) onDelete(itemKey);
            else console.error("itemKey is undefined when calling onDelete");
          }}
          aria-label="Delete Note"
        >
          <FaTrash className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
