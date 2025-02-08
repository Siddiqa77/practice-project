import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchButton = ({ mobile }: { mobile: boolean }) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct search URL with query parameters
    let searchUrl = `/products?query=${query}`;
    if (category) searchUrl += `&category=${category}`;
    if (minPrice) searchUrl += `&minPrice=${minPrice}`;
    if (maxPrice) searchUrl += `&maxPrice=${maxPrice}`;

    // Redirect user to search results page
    window.location.href = searchUrl;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${
        mobile ? "flex md:hidden w-full" : "hidden md:flex"
      } items-center gap-2 bg-white p-2 rounded shadow`}
    >
      {/* Search Input */}
      <input
        type="text"
        name="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
        className="border rounded h-10 md:h-[42px] px-4 w-40 md:w-52 md:text-base text-xs"
      />

      {/* Category Filter */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border rounded h-10 md:h-[42px] px-2 w-32 md:w-40 text-xs md:text-base"
      >
        <option value="">All Categories</option>
        <option value="electronics">Table</option>
        <option value="fashion">Chair</option>
        <option value="home">Bed</option>
        <option value="beauty">Sofa</option>
      </select>

      {/* Price Range Filter */}
      <input
        type="number"
        placeholder="Min $"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        className="border rounded h-10 md:h-[42px] px-2 w-16 md:w-20 text-xs md:text-base"
      />
      <input
        type="number"
        placeholder="Max $"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        className="border rounded h-10 md:h-[42px] px-2 w-16 md:w-20 text-xs md:text-base"
      />

      {/* Search Button */}
      <button
        type="submit"
        className="h-10 md:h-[42px] w-10 md:w-14 flex items-center justify-center bg-pink-600 text-white hover:bg-pink-700 rounded"
      >
        <FiSearch />
      </button>
    </form>
  );
};

export default SearchButton;
