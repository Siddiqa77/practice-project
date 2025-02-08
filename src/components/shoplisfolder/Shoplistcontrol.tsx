"use client"
import React, { useState, useEffect } from "react";

const Shoplistcontrol = () => {
  // Dummy Products Data
  const allProducts = [
    { id: 1, name: "Smart Watch", category: "Accessories", price: 100 },
    { id: 2, name: "Chair", category: "Accessories", price: 50 },
    { id: 3, name: "Sofa", category: "Fashion", price: 30 },
    { id: 4, name: "Speakers", category: "Fashion", price: 80 },
    { id: 5, name: "Plastic Chair", category: "Accessories", price: 40 },
  ];

  const [query, setQuery] = useState(""); // Search Input
  const [searchTerm, setSearchTerm] = useState(""); // Actual term used for filtering
  const [filterByName, setFilterByName] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  // Filter Products when Search Button is clicked
  const handleSearch = () => {
    setSearchTerm(query);
  };

  useEffect(() => {
    let filtered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filterByName !== "All") {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(filterByName.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [searchTerm, filterByName]);

  return (
    <section>
      <div className="w-full px-4 lg:px-0 mt-6 flex flex-wrap items-center justify-between text-sm md:text-base wrapper">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="text-[#151875] text-4xl family font-semibold mt-4 lg:ml-16">
            Hekto Fashionable Furniture
          </div>
          <div className="text-[#8a8fb9] text-[12px] lg:ml-16">
            About {filteredProducts.length} results
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-4 mt-4 md:mt-0 lg:gap-6">
          {/* Search Box */}
          <input
            type="text"
            placeholder="Search Products..."
            className="border rounded p-2 w-48"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="bg-[#FB2E86] text-white lato font-semibold px-4 py-2 rounded"
          >
            Search
          </button>

          {/* Filter By Name */}
          <select
            className="border p-2 rounded"
            value={filterByName}
            onChange={(e) => setFilterByName(e.target.value)}
          >
            <option value="All">All Products</option>
            {allProducts.map((product) => (
              <option key={product.id} value={product.name}>
                {product.name}
              </option>
            ))}
          </select>
        </div>
      </div>

     
    </section>
  );
};

export default Shoplistcontrol;
