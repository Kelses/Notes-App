import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router";
import Home from "./pages/Home";
import Category from "./pages/Category";
import AddRecipe from "./pages/AddRecipe";
import Notes from "./components/Notes";
import EditRecipe from "./pages/EditRecipe";

const CategoryContext = createContext();
export const CategoryProvider = ({ children }) => {
  const categories = [
    "Mediterranean Cuisine",
    "Asian Cuisine",
    "Fusion Cuisine",
    "Vegetarian/Vegan Cuisine",
  ];
  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  );
};

function App() {
  return (
    <Router>
      {/* ✅ Corrected from BrowserRouter */}
      <CategoryProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="add-note" element={<AddRecipe />} />
          <Route path="/" element={<Notes />} />
          <Route path="/edit/:id" element={<EditRecipe />} />{" "}
          {/* Dynamic route */}
        </Routes>
      </CategoryProvider>
    </Router>
  );
}

export default App;
export { CategoryContext };
