import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import Notes from "../components/Notes";
//import { CategoryContext } from "../App";
//import { useContext } from "react";

const Home = () => {
  //const { categories } = useContext(CategoryContext);
  //localStorage.clear();
  return (
    <>
      <div className="bg-[#F5EDE0] text-white min-h-screen flex flex-col">
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
