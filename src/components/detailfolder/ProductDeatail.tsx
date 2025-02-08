"use client";
import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/app/context/cartContext";
import toast from "react-hot-toast";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useWishlist } from "@/app/context/WishlistContext";
import Detailpage from "./detailpage";
import Relatedproducts from "./relatedproducts";


export default function ProductDetails({ product }: { product: any }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart} = useCart();
  const {addToWishlist} = useWishlist();
 

  const handleAddToCart = () => {
    const cartItem = {
      _id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
    };

    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };
  const handleAddToWishlist = () => {
    const wishlist = {
      _id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
    };

    addToWishlist(product);
    toast.success(`${product.name} added to wishlist!`);
   
  };


 
  return (
    <div>
      <Detailpage />
      <div className="flex flex-col justify-between lg:flex-row gap-6 p-4 md:mt-10">
        {/* Left Section - Small Images */}
        <div className="md:flex md:flex-col gap-12 flex justify-evenly object-cover">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="w-20 h-20 flex lg:flex-col gap-6 ml-3 lg:ml-[150px] shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={`/armchair${index}.png`}
                alt={product.name}
                width={200}
                height={300}
                className="w-[151px] h-20 md:w-28 md:h-28 object-cover cursor-pointer"
              />
            </div>
          ))}
        </div>

        {/* Middle Section - Main Image */}
        <div className="flex-1 flex justify-center shadow-xl transform transition-transform duration-300 hover:scale-105">
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={300}
            className="max-w-full lg:w-[350px] lg:h-[400px] object-contain rounded-lg"
          />
        </div>

        {/* Right Section - Product Details */}
        <div className="flex-1 space-y-4">
          <h1 className="text-xl md:text-4xl text-[#151875] font-semibold family">
            {product.name}
          </h1>
          <div className="flex items-center gap-2">
            <span>⭐⭐⭐⭐⭐✔ </span>
            <span className="text-[#151875] text-sm">(22) Reviews</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-lg md:text-xl font-bold">${product.price}</span>
            <span className="text-lg md:text-xl font-bold text-[#19D16F] lato">Available in Stock</span>
          </div>
          <p className="text-[16px] md:text-[18px] text-[#A9ACC6] leading-[29px]">
            Our product is designed with quality, innovation, and customer
            satisfaction in mind. {product.description}
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
              className="px-2 py-1 bg-gray-200 rounded-md"
            >
              ➖
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="px-2 py-1 bg-gray-200 rounded-md"
            >
              ➕
            </button>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button
              onClick={handleAddToCart}
              className="px-4 py-3 sm:py-4 rounded-md bg-[#FB2E86] text-[#fff] w-full sm:w-auto hover:font-bold transform transition-transform duration-300 hover:scale-105"
            >
              Add to Cart 🛒
            </button>
            <button
               onClick={handleAddToWishlist}
              className="px-4 py-3 sm:py-4 rounded-md bg-[#db8a2e] text-[#000] w-full sm:w-auto hover:font-bold transform transition-transform duration-300 hover:scale-105"
            >
              Add to Wishlist 🤍
            </button>
            
          </div>

          {/* Social Links */}
         
           <p className="text-[#151875] font-semibold text-sm lg:text-base">
            Categories
          </p>
          <p className="text-[#151875] font-semibold text-sm lg:text-base">
            Tags
          </p>
          <div className="flex items-center gap-4">
            <p className="text-[#151875] font-semibold text-sm lg:text-base">
              Share
            </p>
            <div className="flex items-center gap-3">
            <Link href="https://www.facebook.com">
              <FaFacebookF className="w-4 h-4 text-[#151875]" />
            </Link>
            <Link href="https://www.linkedin.com">
              <FaLinkedinIn className="w-4 h-4 text-[#151875]" />
            </Link>
            <Link href="https://www.instagram.com">
              <FaInstagram className="w-4 h-4 text-[#151875]" />
            </Link>
            </div>
          </div>
        </div>
      </div>
      <section>
        <Relatedproducts/>
        
      </section>
    </div>
  );
}
