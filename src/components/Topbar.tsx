"use client";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaUser,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "../app/context/cartContext";
import { useWishlist } from "@/app/context/WishlistContext";

const TopBar = () => {
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [currencyDropdown, setCurrencyDropdown] = useState(false);
  const { cartItems } = useCart();
  const { wishlist } = useWishlist();
  const [wishlistClicked, setWishlistClicked] = useState(false);
  const [cartClicked, setCartClicked] = useState(false);

  const handleWishlistClick = () => {
    setWishlistClicked(true);
  };

  const handleCartClick = () => {
    setCartClicked(true);
  };

  return (
    <div className="bg-[#7E33E0] text-[#F1F1F1] py-2 text-sm flex justify-center fixed top-0 left-0 w-full z-50">
      {/* TopBar Container */}
      <div className="w-full max-w-[1200px] flex flex-wrap items-center justify-between px-4 gap-4 sm:gap-6 flex-row">
        {/* Left Section */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="mailto:mhhasanul@gmail.com"
            className="flex items-center gap-1 hover:text-gray-200 font-semibold"
          >
            <FaEnvelope />
            <span className="hidden sm:inline">siddiqabadar@gmail.com</span>
          </a>
          <a
            href="tel:1234567890"
            className="flex items-center gap-1 hover:text-gray-200"
          >
            <FaPhoneAlt />
            <span className="hidden sm:inline">+923213661804</span>
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Language Dropdown */}
          <div
            className="relative cursor-pointer flex items-center gap-1"
            onMouseEnter={() => setLanguageDropdown(true)}
            onMouseLeave={() => setLanguageDropdown(false)}
          >
            <span>English</span>
            <span className="text-xs">▼</span>
            {languageDropdown && (
              <div className="absolute top-8 bg-white text-black rounded shadow-md p-2 z-10 w-28">
                {["English", "Spanish", "French", "German"].map((lang) => (
                  <div
                    key={lang}
                    className="hover:bg-gray-200 px-4 py-1 cursor-pointer"
                  >
                    {lang}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Currency Dropdown */}
          <div
            className="relative cursor-pointer flex items-center gap-1"
            onMouseEnter={() => setCurrencyDropdown(true)}
            onMouseLeave={() => setCurrencyDropdown(false)}
          >
            <span>USD</span>
            <span className="text-xs">▼</span>
            {currencyDropdown && (
              <div className="absolute top-8 bg-white text-black rounded shadow-md p-2 z-10 w-20">
                {["USD", "EUR", "GBP"].map((currency) => (
                  <div
                    key={currency}
                    className="hover:bg-gray-200 px-4 py-1 cursor-pointer"
                  >
                    {currency}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Login */}
          <Link
            href="/myaccount"
            className="flex items-center gap-1 hover:text-gray-200"
          >
            <FaUser />
            <span className="hidden sm:inline">Login</span>
          </Link>

          {/* Wishlist */}
          <Link
            href="/wishlist"
            className="relative flex items-center gap-1 hover:text-gray-200"
            onClick={handleWishlistClick}
          >
            <FaHeart />
            {wishlist.length > 0 && !wishlistClicked && (
              <span className="absolute -top-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {wishlist.length}
              </span>
            )}
            <span className="hidden sm:inline">Wishlist</span>
          </Link>

          {/* Cart */}
          <Link
            href="/shoppingcart"
            className="relative flex items-center gap-1 hover:text-gray-200"
            onClick={handleCartClick}
          >
            <FaShoppingCart />
            {cartItems.length > 0 && !cartClicked && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default TopBar;
