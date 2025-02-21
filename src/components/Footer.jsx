const Footer = () => {
  return (
    <footer className="bg-[#D2B48C] text-[#5C4033] py-8 border-t border-[#5C4033]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-lg font-semibold">
          🍽️{" "}
          <span className="text-[#5C4033]">
            Discover & Share Your Favorite Recipes
          </span>
        </h2>
        <p className="text-sm mt-2 text-[#5C4033]">
          Explore new flavors, save your favorite dishes, and create
          personalized cooking notes. Your perfect recipe collection starts
          here!
        </p>
        <div className="border-t border-[#5C4033] mt-6 pt-4 text-sm opacity-80">
          <p>© 2025 Cooking Notes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
