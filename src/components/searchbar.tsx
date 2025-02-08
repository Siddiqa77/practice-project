import { useState } from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      alert("Please enter a search term!");
      return;
    }

    const userResponse = window.confirm(
      `Do you want to search for: "${searchQuery}"?`
    );

    if (userResponse) {
      console.log("Searching for:", searchQuery);
      alert(`Searching for: "${searchQuery}"`);
    }
  };

  return (
    <div className="lg:flex hidden md:block w-[243px] h-[40px] bg-[#fff] rounded-[4px] items-center">
      {/* Input field */}
      <input
        className="w-full p-1 px-3 text-[13px] rounded-md bg-[#fff] outline-none"
        type="search"
        placeholder="What are you looking for?"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />

      {/* Search icon */}
      <div className="hidden md:flex items-center space-x-4 h-10">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="pr-20 h-10 text-sm text-gray-700 border-2 border-[#e7e6ef]"
          />
          <div
            onClick={handleSearch}
            className="w-[51px] h-10 left-[200px] top-0 absolute bg-[#fb2e86] flex items-center justify-center cursor-pointer"
          >
            <IoSearch className="text-white text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
