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
    navigate(`/edit/${itemKey}`); // Navigate to the edit page with itemKey as the URL parameter
  };
  //const onDelete = () => {};
  //const onEdit = () => {};

  return (
    <div className="bg-amber-300 text-black rounded-xl p-6 shadow-lg border border-yellow-300">
      {/* Title */}
      <h2 className="text-2xl font-bold text-center border-b border-white/30 pb-2">
        {title}
      </h2>

      {/* Metadata */}
      <div className="text-sm mt-4 space-y-3">
        <div className="flex items-center gap-2 bg-white/10 p-2 rounded-md border border-white/20">
          <FaCalendarAlt className="text-white" />
          <span className="opacity-90">
            <span className="font-semibold">Date:</span> {date}
          </span>
        </div>

        <div className="flex items-center gap-2 bg-white/10 p-2 rounded-md border border-white/20">
          <FaUtensils className="text-white" />
          <span className="opacity-90">
            <span className="font-semibold">Category:</span> {category}
          </span>
        </div>

        <div className="flex items-center gap-2 bg-white/10 p-2 rounded-md border border-white/20">
          <FaList className="text-white" />
          <span className="opacity-90">
            <span className="font-semibold">Ingredients:</span> {ingredients}
          </span>
        </div>

        <div className="flex items-center gap-2 bg-white/10 p-2 rounded-md border border-white/20">
          <FaClock className="text-white" />
          <span className="opacity-90">
            <span className="font-semibold">Time:</span> {time}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm mt-4 bg-white/5 p-3 rounded-md border border-white/20">
        {description}
      </p>

      {/* Buttons */}
      <div className="flex justify-end gap-3 mt-5">
        <button
          className="p-3 bg-blue-700 hover:bg-blue-800 text-white rounded-full transition"
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
