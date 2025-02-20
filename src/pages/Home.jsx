import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Notes from "../components/Notes";
//import { CategoryContext } from "../App";
//import { useContext } from "react";

const Home = () => {
  //const { categories } = useContext(CategoryContext);
  //localStorage.clear();
  return (
    <>
      <div className="bg-orange-100 text-white min-h-screen flex flex-col">
        <Navbar />

        <main className="container mx-auto p-4 flex-grow">
          <Notes />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
