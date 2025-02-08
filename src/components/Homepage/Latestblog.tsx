"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { sanityClient } from "@/sanity/sanity";
import Link from "next/link";

const Latestblog: React.FC = () => {
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    // Fetch data from Sanity
    const fetchProducts = async () => {
      const query = `*[_type == "latestblog"]{
       id, 
       name,
        author,
        date,
        description,
        
         "image": image.asset->url,


      }`;
      const product = await sanityClient.fetch(query);
      setProducts(product);
    };
    fetchProducts();
  }, []);

  if (!products.length) return <p>Loading...</p>;
  return (
    <div>
      {/* Heading */}
      <h2 className="text-4xl family font-bold text-center text-[#1A0B5B] mb-10">
        Latest Blog
      </h2>
      <div className="wrapper flex flex-wrap gap-12 justify-center">
        {products.map((product: any, index: any) => (
          <div key={index} className="w-full sm:w-[370px] h-auto relative">
            <div className="relative bg-[#fff] rounded-[5px] transform transition-transform duration-300 hover:scale-105">
              <div className="w-full h-[255px] bg-[#fff] rounded-t-[5px] overflow-hidden">
                <Image
                  className="w-full h-full object-cover"
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={400}
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mt-2 text-sm text-[#151875]">
                  <span>🔸{product.author}</span>
                  <span className="ml-18">|</span>
                  <span className="ml-20">✡{product.date}</span>
                </div>
              </div>
              <div className="p-4">
                <div className="text-lg font-bold">{product.name}</div>

                <p className="mt-4 text-[#72718f] text-base leading-[1.8]">
                  {product.description}
                </p>
                <Link
                  href="/mainblogpage"
                  className="mt-4 block underline text-base"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latestblog;
