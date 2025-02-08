"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

const TrendingProducts = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "item"][12...16]{
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
    <div className="">
      {/* Heading */}
      <h2 className="text-4xl family font-bold text-center md:mt-16 text-[#151875] mb-10">
        Trending Products
      </h2>

      {/* Product Section */}
      <div className="container mx-auto px-4 py-10">
        {/* Wrapper for Cards */}
        <Link href="/products">
          <div className="flex flex-wrap justify-center gap-6">
            {products.map((product: any, index: any) => (
              <div
                key={index}
                className="w-full bg-[#FFFFFF] sm:w-[45%] md:w-[30%] lg:w-[22%] h-auto flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
              >
                <div className="w-[269px] h-[269px] bg-[#F6F7FB]  shadow-md flex items-center justify-center transition-shadow duration-300 hover:shadow-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={100}
                    className="object-contain transition-transform duration-300 hover:scale-110"
                  />
                </div>

                {/*  */}
                <Link href={`/topcategories/${product.id}`}>
                  <div className="mt-4 text-center ">
                    <h3 className="text-[#151875] text-[16px] font-bold lato leading-normal">
                      {product.name}
                    </h3>
                    <div className="flex justify-evenly items-center">
                      <p className="text-sm font-normal text-[#151875] family">
                        ${product.price}
                      </p>
                      <p className="text-base font-semibold family text-[#FB2E86]">
                        {product.discountPercentage}% off
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </Link>

        {/* Offers Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {/* First Offer */}
          <div className="relative bg-[#FFF6FB] rounded-md p-6 flex flex-col justify-between items-center transition-transform duration-300 hover:scale-110">
            <div>
              <h2 className="text-[#151875] font-bold text-xl md:text-2xl mb-2 text-center">
                23% off in all products
              </h2>
              <Link
                href="/griddefault"
                className="text-[#FB2E86] text-[16px] font-semibold text-center block underline lato"
              >
                Shop Now
              </Link>
            </div>
            <Image
              src="/trendingpropic5.png"
              alt="Clock"
              width={100}
              height={100}
              className="w-[100px] md:w-[150px] mt-4 md:ml-44"
            />
          </div>

          {/* Second Offer */}
          <div className="relative bg-[#EEEFFB] rounded-md p-6 flex flex-col justify-between items-center transition-transform duration-300 hover:scale-110">
            <div>
              <h2 className="text-[#151875] font-bold text-xl md:text-2xl mb-2 text-center">
                23% off in all products
              </h2>
              <Link
                href="/products"
                className="text-[#FB2E86] text-[16px] font-semibold text-center block underline lato"
              >
                View Collection
              </Link>
            </div>
            <Image
              src="/trendingpropic6.png"
              alt="Cabinet"
              width={100}
              height={100}
              className="w-[100px] md:w-[150px] mt-4"
            />
          </div>
          {/* Sidebar */}
          <div className="col-span-1 md:col-span-1 space-y-4">
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-[#F6F7FB] shadow-md rounded-md p-4 flex items-center justify-between transition-transform duration-300 hover:scale-110"
                >
                  <Image
                    src={products[index].image}
                    alt={products[index].name}
                    width={200}
                    height={200}
                    className="w-[50px] h-[50px] object-cover"
                  />

                  <div className="">
                    <h3 className="text-[#151875] font-semibold text-sm">
                      {products[index].name}
                    </h3>
                    <p className="text-[#7E81A2] text-sm line-through">
                      ${products[index].price}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
