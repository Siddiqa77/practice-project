"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { FaCartArrowDown, FaHeart } from "react-icons/fa";
import { useCart } from "@/app/context/cartContext";
import { useWishlist } from "@/app/context/WishlistContext";
import { toast } from "react-hot-toast";

const ShopgridProduct: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  
  useEffect(() => {
    // Fetch data from Sanity
    const fetchProducts = async () => {
      const query = `*[_type == "item"]{
        id, 
        name,
        price,
        description,
        discountPercentage,
        "image": image.asset->url
      }`;
      const products = await client.fetch(query);
      setProducts(products);
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product: any) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleAddToWishlist = (product: any) => {
    addToWishlist(product);
    toast.success(`${product.name} added to wishlist!`);
  };

  if (!products.length) return <p>Loading...</p>;
 
  return (
    <div className="container mx-auto px-4 py-10 max-w-[1177px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative bg-[#ffffff] w-full items-center shadow-md rounded-md overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-[#F6F7FB] w-full h-[236px] flex justify-center items-center relative">
              <div className="absolute bottom-4 right-4 flex gap-4">
                <button onClick={() => handleAddToCart(product)} title="Add to Cart">
                  <FaCartArrowDown className="text-[#151875] font-semibold text-[20px]" />
                </button>
                <button onClick={() => handleAddToWishlist(product)} title="Add to Wishlist">
                  <FaHeart className="text-red-700 font-semibold text-[20px]" />
                </button>
              </div>
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={300}
                className="w-[130px] h-[150px] object-contain"
              />
            </div>
            <div className="p-4">
              <Link href={`/product/${product.id}`}>
                <h3 className="text-xl font-semibold text-[#151875] mb-2 family text-[18px]">
                  {product.name}
                </h3>
              </Link>
              <div className="flex items-center justify-center mb-3 space-x-2">
                {["#DE9034", "#EC42A2", "#8568FF"].map((color, idx) => (
                  <div
                    key={idx}
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
              <div className="flex justify-evenly items-center">
                <p className="text-sm font-semibold text-[#151875] family">
                  ${product.price}
                </p>
                <p className="text-sm font-normal family">
                  {product.discountPercentage}% off
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopgridProduct;
