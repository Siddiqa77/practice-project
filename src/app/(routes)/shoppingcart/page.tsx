"use client";

import { useCart } from "@/app/context/cartContext";
import Tags from "@/components/Homepage/Tags";
import Image from "next/image";
import { useRouter } from "next/navigation"; 
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const CartPage = () => {
  const router = useRouter(); 

  const [loading, setLoading] = useState(false);
  const { cartItems, setCartItems, removeFromCart, incrementItem, decrementItem } = useCart();

  const handleRemove = (id: string) => {
    removeFromCart(id);
    Swal.fire("Item successfully removed from Cart");
  };

  const handleClearCart = () => {
    Swal.fire("Cleared Cart Successfully").then(() => {
      setCartItems([]);
      localStorage.removeItem("cartItems");
    });
  };

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems)); // Save cart data to localStorage
    }
  }, [cartItems]); 

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shippingFee = totalPrice > 3000 ? 0 : 10;
  const tax = totalPrice * 0.01;
  const grandTotal = totalPrice + shippingFee + tax;

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      Swal.fire("Your cart is empty!");
      return;
    }

    localStorage.setItem("checkoutItems", JSON.stringify(cartItems));
    router.push("/checkout"); 
  };
  const grids = [
    {
      title: "My Shopping Cart",
    },
  ];
  const current = grids[0];

  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#F6F5FF] py-10 md:py-20 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
        {/* Center Column: Content (Title, Description, Button) */}
        <div className="md:w-1/3 max-w-lg text-center md:text-left flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl family font-bold text-[#101750] leading-tight mt-2 lg:ml-20">
            {current.title}
          </h1>
          <div className="flex flex-wrap justify-center gap-6 mb-10 mr-4 lg:mr-20">
            <div className="text-[#000000] text-[16px] font-normal lato cursor-pointer hover:text-[#fb2448] transition">
              Home
            </div>
            <div className="text-[#000] text-[16px] font-normal lato cursor-pointer hover:text-[#fb2448] transition">
              Pages
            </div>
            <div className="text-[#FB2E86] text-[16px] font-normal lato cursor-pointer hover:text-[#fb2448] transition">
              Shopping cart
            </div>
          </div>
        </div>
      </section>

      {/* Cart Section */}
      <main className="wrapper mt-20 mx-auto px-4 py-8 gap-8 flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-2/3">
          {cartItems.length === 0 ? (
            <div className="w-full text-center">
              <h2 className="text-4xl font-semibold text-gray-700 family">
                Your cart is empty
              </h2>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-12 items-center border-b pb-4">
                <p className="col-span-6 font-bold text-[#1D3178] text-sm md:text-base">
                  Product
                </p>
                <p className="col-span-2 font-bold text-center text-[#1D3178] text-sm md:text-base">
                  Price
                </p>
                <p className="col-span-2 font-bold text-center text-[#1D3178] text-sm md:text-base">
                  Quantity
                </p>
                <p className="col-span-2 font-bold text-center text-[#1D3178] text-sm md:text-base">
                  Total
                </p>
              </div>

              <div className="mt-6 space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-12 items-center gap-4 border-b pb-4"
                  >
                    <div className="col-span-6 flex gap-4 items-center relative">
                      <Image
                        className="h-[60px] w-[60px] md:h-[87px] md:w-[83px] rounded-md"
                        src={item.image}
                        alt={item.name}
                        width={85}
                        height={85}
                      />
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="absolute top-0 left-0 bg-black text-white w-5 h-5 rounded-full flex justify-center items-center"
                      >
                        x
                      </button>
                      <div>
                        <h4 className="font-semibold text-sm md:text-base text-[#000000]">
                          {item.name}
                        </h4>
                        {item.color && (
                          <p className="text-xs md:text-sm text-[#A1A8C1]">
                            Color: {item.color}
                          </p>
                        )}
                        {item.size && (
                          <p className="text-xs md:text-sm text-[#A1A8C1]">
                            Size: {item.size}
                          </p>
                        )}
                      </div>
                    </div>

                    <p className="col-span-2 text-center text-xs md:text-sm text-[#000000]">
                      ${item.price}
                    </p>
                    <div className="col-span-2 flex justify-center items-center gap-2">
                      <button
                        onClick={() => incrementItem(item.id)}
                        className="w-6 h-6 bg-[#E7E7EF] text-[#1D3178] font-bold rounded"
                      >
                        +
                      </button>
                      <p className="text-sm md:text-base text-[#000000]">
                        {item.quantity}
                      </p>
                      <button
                        onClick={() => decrementItem(item.id)}
                        className="w-6 h-6 bg-[#E7E7EF] text-[#1D3178] font-bold rounded"
                      >
                        -
                      </button>
                    </div>
                    <p className="col-span-2 text-center text-xs md:text-sm text-[#000000]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap justify-between gap-4 mt-6">
                <button
                  className="text-[#fff] font-bold w-full md:w-[179px] h-[41px] bg-[#FB2E86] hover:font-bold transition duration-300 ease-in-out transform hover:bg-pink-700 hover:scale-105"
                  onClick={() => setLoading(true)}
                >
                  Update Cart
                </button>
                <button
                  className="rounded-[3px] text-[#fff] bg-[#FB2E86] w-[179px] h-[41px] font-medium hover:font-bold transition duration-300 ease-in-out transform hover:bg-pink-700 hover:scale-105"
                  onClick={handleClearCart}
                >
                  Clear Cart
                </button>
              </div>
            </>
          )}
        </div>

        <div className="flex flex-col gap-8 w-full lg:w-[371px]">
          <div className="flex flex-col items-center">
            <h3 className="text-[#1D3178] text-lg md:text-xl font-semibold">
              Cart Totals
            </h3>
            <div className="bg-[#F4F4FC] p-4 md:p-8 rounded-md flex flex-col gap-4 w-full">
              <div className="flex justify-between border-b pb-2 border-gray-300">
                <h4 className="text-[#1D3178] text-sm md:text-base font-semibold">
                  Subtotals:
                </h4>
                <p className="text-[#15245E]">${totalPrice.toFixed(2)}</p>
              </div>
              <div className="flex justify-between border-b pb-2 border-gray-300">
                <h4 className="text-[#1D3178] text-sm md:text-base font-semibold">
                  Shipping Fee:
                </h4>
              
                <p className="text-[#15245E]">$0.00</p>
</div>
<div className="flex justify-between border-b pb-2 border-gray-300">
  <h4 className="text-[#1D3178] text-sm md:text-base font-semibold">
    Taxes:
  </h4>
  <p className="text-[#15245E]">${tax.toFixed(2)}</p>
</div>
<div className="flex justify-between border-b pb-2 border-gray-300">
  <h4 className="text-[#1D3178] text-sm md:text-base font-semibold">
    Grand Total:
  </h4>
  <p className="text-[#15245E]">${grandTotal.toFixed(2)}</p>
              </div>
             
           
            <button
      onClick={handleCheckout}
      className="bg-[#FB2E86] text-white px-6 py-3 rounded-lgtransition duration-300 ease-in-out transform hover:bg-green-600 hover:scale-105 hover:font-bold"
    >
      Proceed to Checkout
    </button>
            </div>
          </div>
          <div className="flex justify-between border-b pb-2 border-gray-300">
 
  
</div>
        </div>
      </main>
      <section>
        <Tags/>
      </section>
    </div>
  );
};

export default CartPage;
