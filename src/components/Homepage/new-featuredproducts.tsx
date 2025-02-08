"use client";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";

const FeaturedProduct = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "item"][0...4]{
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
    <div className="container mx-auto px-4 py-10 max-w-[1177px]">
      {/* Heading */}
      <h2 className="text-4xl family font-bold text-center md:mt-16 text-[#151875] mb-10">
        Featured Products
      </h2>

      {/* Product Grid */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {/* Product Card */}
        {products.map((product: any, index: any) => (
          <div
            key={index}
            className="relative bg-[#ffffff] shadow-md hover:bg-[#2F1AC4] rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-105 group"
          >
            {/* Upper Section: Image and Background */}
            <div className="bg-[#F6F7FB] w-[270] h-[236px] flex justify-center items-center relative">
              {/* 2nd card icons */}
              <div className="w-[19px] h-[19px] bottom-[90px] right-7 relative">
                <div className="flex gap-4">
                  <Image
                    src="/featuredcart.png"
                    alt="cart"
                    width={19}
                    height={19}
                  />

                  <Image
                    src="/featuredheart.png"
                    alt="heart"
                    width={19}
                    height={19}
                  />
                  <Image
                    src="/featuredsearch.png"
                    alt="search"
                    width={19}
                    height={19}
                  />
                </div>
                <div className="w-[13.85px] h-[13.85px] left-[1.98px] top-[2.77px] absolute"></div>
              </div>

              {/* Product Image */}
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-[130px] h-[150px] object-contain"
              />

              {/* Conditionally Render "View Details" Button for 2nd Card */}
              {index === 1 && (
                <div className="absolute top-[200px] pt-2 text-center w-[94px] h-[29px] left-1/2 transform -translate-x-1/2 bg-[#08d15f] text-[#fff] family text-xs font-medium py-1 px-3 rounded shadow-md">
                  <Link href={`/product/${product.id}`}>View Details</Link>
                </div>
              )}
            </div>

            {/* Product Details */}
            <Link href={`/product/${product.id}`}>
              <div className="p-4 transition group-hover:bg-[#2F1AC4]">
                {/* Product Content */}
                <div className="text-[#FB2E86] lato text-[18px] group-hover:text-white group-hover:font-bold">
                  {/* Product Name */}
                  <h3 className="text-lg font-bold mb-2 lato">
                    {product.name}
                  </h3>

                  {/* Static Color Options */}
                  <div className="flex items-center justify-center mb-3 space-x-2">
                    {["#05e6b7", "#f701a8", "#00009d"].map((color, idx) => (
                      <div
                        key={idx}
                        className="w-3.5 h-1"
                        style={{ backgroundColor: color, borderRadius: "10px" }}
                      ></div>
                    ))}
                  </div>

                  {/* Static Product Code */}
                  <p className="text-sm mb-1 family font-normal text-[#151875] group-hover:text-white group-hover:font-bold">
                    Code - Y523201
                  </p>

                  {/* Product Price */}
                  <p className="text-sm font-semibold lato text-[#151875] group-hover:text-white group-hover:font-bold">
                    ${product.price}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
