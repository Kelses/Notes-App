import Select from "react-select";
import { CategoryContext } from "../App";
import { useContext, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router";

const AddRecipe = () => {
  const { categories } = useContext(CategoryContext);
  const navigate = useNavigate();
  console.log("AddNotePage:", categories);

  const cats = categories.map((category) => ({
    value: category,
    label: category,
  }));

  const [form, setForm] = useState({
    title: "",
    date: "",
    category: "",
    ingredients: "",
    time: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCategoryChange = (selectedOption) => {
    setForm({ ...form, category: selectedOption.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const uniqueKey = `note_${Date.now()}`;
    localStorage.setItem(uniqueKey, JSON.stringify(form));
    console.log("Stored note:", JSON.parse(localStorage.getItem(uniqueKey)));
    alert("The note was added!");
    navigate("/"); // Navigate to home
  };

  return (
    <div className="bg-[#FAF3E0] text-black min-h-screen flex flex-col">
      <Navbar />
      <section className="items-center flex flex-col px-4 py-10 flex-grow">
        <div className="border border-[#C19A6B] rounded-xl w-full max-w-lg md:max-w-xl lg:max-w-2xl p-5 bg-[#F5EDE0]">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col px-4 pb-8 gap-5"
          >
            {/* Title */}
            <label className="input-custom gap-2 w-full">
              <input
                value={form.title}
                onChange={handleChange}
                name="title"
                className="grow w-full p-4 rounded-md border border-[#C19A6B] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C19A6B]"
                placeholder="Title"
                required
              />
            </label>

            {/* Date */}
            <label className="input-custom gap-2 w-full">
              <input
                value={form.date}
                onChange={handleChange}
                type="date"
                name="date"
                className="grow w-full p-4 rounded-md border border-[#C19A6B] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C19A6B]"
                required
              />
            </label>

            {/* Category */}
            <Select
              options={cats}
              placeholder="Select category"
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

            {/* Ingredients */}
            <label className="input-custom gap-2 w-full">
              <input
                value={form.ingredients}
                onChange={handleChange}
                name="ingredients"
                className="grow w-full p-4 rounded-md border border-[#C19A6B] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C19A6B]"
                placeholder="Ingredients"
                required
              />
            </label>

            {/* Time */}
            <label className="input-custom gap-2 w-full">
              <input
                value={form.time}
                onChange={handleChange}
                name="time"
                className="grow w-full p-4 rounded-md border border-[#C19A6B] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C19A6B]"
                placeholder="Time required (e.g., 30 mins)"
                required
              />
            </label>

            {/* Description */}
            <label className="textarea-custom gap-2 w-full">
              <textarea
                value={form.description}
                onChange={handleChange}
                name="description"
                className="grow w-full bg-bgInput p-4 rounded-md border border-[#C19A6B] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C19A6B] h-48"
                placeholder="Describe what you are going to do..."
                required
              />
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#C19A6B] hover:bg-[#5C4033] text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Add Recipe
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default AddRecipe;
