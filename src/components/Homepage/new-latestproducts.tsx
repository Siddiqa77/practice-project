"use client";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";

const LatestProduct = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "item"][5...11]{
        id, 
        name,
        price,
        description,
        discountedPercentage,
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
        Latest Products
      </h2>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        <div className="text-[#fb2e86] text-lg font-normal lato cursor-pointer hover:text-[#fb2448] transition">
          New Arrival
        </div>
        <div className="text-[#151875] text-lg font-normal lato cursor-pointer hover:text-[#fb2448] transition">
          Best Seller
        </div>
        <div className="text-[#151875] text-lg font-normal lato cursor-pointer hover:text-[#fb2448] transition">
          Featured
        </div>
        <div className="text-[#151875] text-lg font-normal lato cursor-pointer hover:text-[#fb2448] transition">
          Special Offer
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-8">
        {products.map((product: any, index: any) => (
          <div
            key={index}
            className="relative bg-[#fff] shadow-lg rounded-md overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            {/* Product Image */}
            <div className="w-full flex justify-center items-center p-4 bg-[#fff]">
              <Image
                src={product.image}
                width={223}
                height={200}
                alt={product.name}
                className="w-[223px] h-[200px] sm:h-[260px] object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="p-4">
              <Link href={`/latestproduct/${product.id}`}>
                {/* Name, Price, and Discount in One Row */}
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-[#151875] family leading-normal">
                    {product.name}
                  </h3>
                  <div className="text-right">
                    <p className="text-sm font-bold text-[#151875] family">
                      ${product.price}
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Divider Line */}
            <div className="h-[2px] bg-[#eeeffb] w-full mt-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProduct;
