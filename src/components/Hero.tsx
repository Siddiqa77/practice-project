"use client";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "hero"][0...3]{
        id, 
        name,
        description,
        "image": image.asset->url,
       
       
      }`;
      const products = await client.fetch(query);
      setProducts(products);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % products.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? products.length - 1 : prevSlide - 1
    );
  };

  if (loading) return <p>Loading...</p>;

  const currentProduct = products[currentSlide];
  

  return (
    <section className="relative bg-[#F2F0FF] py-10 md:py-20 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden transition-all duration-300 ease-in-out">
      {/* Left Column: Lamp */}
      <div className="md:w-1/4 flex justify-center items-start relative">
        <div className="absolute top-[-250px] left-[-20px] z-10 transition-transform duration-300 ease-in-out transform hover:scale-105">
          <Image
            src="/light.png"
            alt="Lamp"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
      </div>

      {/* Center Column: Content */}
      <div className="md:w-1/3 max-w-lg left-0 text-center md:text-left flex flex-col justify-center">
        <p className="text-sm text-[#FB2E86] lato font-bold transition-all duration-300 ease-in-out">
          Best Furniture For Your Castle...
        </p>
        <h1 className="text-4xl family md:text-4xl font-bold text-[#000] leading-tight mt-2 tracking-[0.795px] transition-all duration-300 ease-in-out">
          {currentProduct.name}
        </h1>
        <p className="text-[#8A8FB9] text-[16px] mt-4 leading-[28px] font-semibold lato transition-all duration-300 ease-in-out">
          {currentProduct.description}
        </p>
        <Link
          href="/griddefault"
          className="inline-block bg-[#FB2E86] text-[#fff] text-[17px] family font-semibold py-3 px-3 ml-20 mt-6  hover:font-bold hover:bg-pink-700 hover:scale-105 transition-all duration-300 ease-in-out w-1/2 sm:w-1/2 text-center"
        >
          Shop Now
        </Link>
      </div>

      {/* Right Side: Chair Image */}
      <div className="md:w-1/3 flex justify-center items-center relative">
        <div className="relative bg-[#ECD2FA59] rounded-full p-8 shadow-xl mt-6 mx-auto transition-transform duration-300 ease-in-out transform hover:scale-110">
          <Image
            src={currentProduct.image}
            alt="Banner sofa"
            width={450}
            height={400}
            className="object-fit w-full h-auto"
          />
        </div>
        {/* Discount Tag */}
        <div className="absolute family top-8 right-5 w-[100px] h-[100px] bg-[#00C1FE] text-[#fff] text-[20px] font-semibold flex items-center justify-center rounded-full shadow-md  transition-transform duration-300 ease-in-out transform hover:scale-110">
          <span>
            50% <br />
            off
          </span>
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out ${
              currentSlide === index
                ? "bg-[#FB2E86] scale-110"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          ></button>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full p-3 shadow-md hover:bg-gray-200 transition-transform duration-300 ease-in-out transform hover:scale-110"
      >
        ❮
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full p-3 shadow-md hover:bg-gray-200 transition-transform duration-300 ease-in-out transform hover:scale-110"
      >
        ❯
      </button>
    </section>
  );
};

export default Hero;
