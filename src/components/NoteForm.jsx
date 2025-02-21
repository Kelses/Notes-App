import { useState } from "react";

const NoteForm = ({ note, onSave }) => {
  const [title, setTitle] = useState(note.title);
  const [date, setDate] = useState(note.date);
  const [category, setCategory] = useState(note.category);
  const [ingredients, setIngredients] = useState(note.ingredients);
  const [time, setTime] = useState(note.time);
  const [description, setDescription] = useState(note.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedNote = {
      title,
      date,
      category,
      ingredients,
      time,
      description,
    };
    onSave(updatedNote); // Pass updated note back to parent
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#FAF3E0] p-8 rounded-xl shadow-md space-y-6 max-w-3xl mx-auto mt-10"
    >
      <div className="space-y-4">
        <label className="block font-semibold text-[#5C4033]">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border border-[#C19A6B] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C19A6B]"
        />
      </div>

      <div className="space-y-4">
        <label className="block font-semibold text-[#5C4033]">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-3 border border-[#C19A6B] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C19A6B]"
        />
      </div>

      <div className="space-y-4">
        <label className="block font-semibold text-[#5C4033]">Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-3 border border-[#C19A6B] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C19A6B]"
        />
      </div>

      <div className="space-y-4">
        <label className="block font-semibold text-[#5C4033]">
          Ingredients
        </label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full p-3 border border-[#C19A6B] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C19A6B]"
        />
      </div>

      <div className="space-y-4">
        <label className="block font-semibold text-[#5C4033]">Time</label>
        <input
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full p-3 border border-[#C19A6B] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C19A6B]"
        />
      </div>

      <div className="space-y-4">
        <label className="block font-semibold text-[#5C4033]">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 border border-[#C19A6B] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C19A6B]"
        />
      </div>

      <div className="flex justify-center mt-6">
        <button
          type="submit"
          className="px-6 py-2 bg-[#C19A6B] text-white rounded-full hover:bg-[#5C4033] transition duration-300"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default NoteForm;
