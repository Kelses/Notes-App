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

  const cats = [
    {
      value: categories[0],
      label: categories[0],
    },
    {
      value: categories[1],
      label: categories[1],
    },
    {
      value: categories[2],
      label: categories[2],
    },
    { value: categories[3], label: categories[3] },
  ];
  const [form, setForm] = useState({
    title: "",
    date: "",
    category: "",
    ingredients: "", // New Field
    time: "", // New Field
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
    console.log("Stored note:", JSON.parse(localStorage.getItem(uniqueKey))); // Check the stored item
    alert("The note was added!");
    navigate("/"); // Navigate to home
  };

  return (
    <div className="bg-orange-100 text-black min-h-screen flex flex-col">
      <Navbar />
      <section className="items-center flex flex-col px-4 py-10 flex-grow">
        <div className="border border-light textLight rounded-xl w-full max-w-lg md:max-w-xl lg:max-w-2xl p-5 bg-orange-200">
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
                className="grow w-full"
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
                className="grow w-full"
                required
              />
            </label>

            {/* Category */}
            <Select
              options={cats}
              placeholder="Select category"
              onChange={handleCategoryChange}
              className="w-full"
            />

            {/* Ingredients */}
            <label className="input-custom gap-2 w-full">
              <input
                value={form.ingredients}
                onChange={handleChange}
                name="ingredients"
                className="grow w-full"
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
                className="grow w-full"
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
                className="grow w-full bg-bgInput h-48"
                placeholder="Describe what you are going to do..."
                required
              />
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-lg transition"
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
