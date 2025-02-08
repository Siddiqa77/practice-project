"use client";
import Image from "next/image";
import { sanityClient } from "@/sanity/sanity";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

const Topcategories = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "item"][17...21]{
        id, 
        name,
        price,
        description,
        discountPercentage,
        "image": image.asset->url,
      }`;
      const products = await client.fetch(query);
      setProducts(products);
      setLoading(false);
    };

    fetchProducts();
  }, []);
  console.log(products);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto px-4 py-10 mb-20">
      {/* Heading */}
      <h2 className="text-4xl family font-bold text-center text-[#151875] mb-20">
        Top Categories
      </h2>

      {/* Wrapper for Cards */}
      <Link href="/products">
        <div className="flex flex-wrap justify-center gap-6">
          {products.map((product: any, index: any) => (
            <div
              key={index}
              className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] h-auto flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
            >
              <div className="w-[269px] h-[269px] bg-[#F6F7FB] rounded-full shadow-md flex items-center justify-center transition-shadow duration-300 hover:shadow-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={150}
                  height={150}
                  className="object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
              {/* Conditionally Render "View Details" Button for 2nd Card */}
              {index === 1 && (
                <div className="absolute top-[200px] pt-2 text-center w-[94px] h-[29px] left-1/2  transform -translate-x-1/2 bg-[#08d15f] text-[#fff] family text-xs font-medium py-1 px-3 rounded shadow-md">
                  <Link href={`/topcategories/${product.id}`}>
                    View Details
                  </Link>
                </div>
              )}
              <Link href={`/topcategories/${product.id}`}>
                <div className="mt-4 text-center">
                  <h3 className="text-[#151875] text-xl font-normal family leading-normal">
                    {product.name}
                  </h3>
                  <p className="text-[#151875] text-base font-normal">
                    ${product.price}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Link>

      {/* SVG Section */}
      <div className="flex justify-center mt-8">
        <svg
          className="w-[67px] h-[15px] transition-transform duration-300 hover:scale-110"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 67 15"
          fill="none"
        >
          <rect
            y="7.07129"
            width="10"
            height="9.8913"
            rx="4.94565"
            transform="rotate(-45 0 7.07129)"
            fill="#FB2E86"
          />
          <rect
            x="26.7071"
            y="7.60645"
            width="9"
            height="8.8913"
            rx="4.44565"
            transform="rotate(-45 26.7071 7.60645)"
            stroke="#FB2E86"
          />
          <rect
            x="52.7071"
            y="7.60645"
            width="9"
            height="8.8913"
            rx="4.44565"
            transform="rotate(-45 52.7071 7.60645)"
            stroke="#FB2E86"
          />
        </svg>
      </div>
    </div>
  );
};

export default Topcategories;
