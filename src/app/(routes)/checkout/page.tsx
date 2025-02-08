"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import Tags from "@/components/Homepage/Tags";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string);

interface CheckoutItem {
  id: number;
  name: string;
  image: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
  amount: number;
}

const Checkout = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [checkoutItems, setCheckoutItems] = useState<CheckoutItem[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    country: "",
    phone: "",
  });

  useEffect(() => {
    const storedItems = localStorage.getItem("checkoutItems");
    if (storedItems) {
      setCheckoutItems(JSON.parse(storedItems));
    }
  }, []);

  const subtotal = checkoutItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = subtotal * 0.1; 
  const total = subtotal - discount;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNavigation = () => {
    if (isLoading) return; 

    setIsLoading(true);

    Swal.fire({
      title: "Redirecting...",
      text: "Please wait while we process your request.",
      icon: "info",
      timer: 1500,
      showConfirmButton: false,
    });

    setTimeout(() => {
      router.push("/file"); 
      setIsLoading(false); 
    }, 1500);
  };

  const handleRemoveItem = (id: number) => {
    const updatedItems = checkoutItems.filter((item) => item.id !== id);
    setCheckoutItems(updatedItems);
    localStorage.setItem("checkoutItems", JSON.stringify(updatedItems));
  };

  const grids = [
    {
      title: "Checkout",
    },
  ];
  const current = grids[0];

  return (
    <div className="px-4 md:px-10 lg:px-20">
      <section className="relative bg-[#F6F5FF] py-10 md:py-20 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
        <div className="md:w-1/3 max-w-lg text-center md:text-left flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl family font-bold text-[#101750] leading-tight mt-2 lg:ml-20">
            {current.title}
          </h1>
          <div className="flex flex-wrap justify-center gap-6 mb-10 mr-4 lg:mr-20">
            <div className="text-[#000000] text-[16px] font-normal lato cursor-pointer family hover:text-[#fb2448] transition">
              Home
            </div>
            <div className="text-[#000] text-[16px] font-normal lato cursor-pointer family hover:text-[#fb2448] transition">
              Pages
            </div>
            <div className="text-[#FB2E86] text-[16px] font-normal lato cursor-pointer family hover:text-[#fb2448] transition">
              Checkout
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row mt-10 gap-5">
        <div className="flex-1 bg-[ghostwhite] rounded p-6">
          <h2 className="text-[#1D3178] font-bold text-xl family">Contact Information</h2>
          <form  className="mt-5 space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email or UserName"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border-b-2 p-2"
            />
            <h2 className="text-[#1D3178] font-bold family text-xl">Shipping Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleInputChange} className="w-full border-b-2 p-3" />
              <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleInputChange} className="w-full border-b-2 p-3" />
              <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleInputChange} className="w-full border-b-2 p-3" />
              <input type="text" name="zip" placeholder="Postal Code" value={formData.zip} onChange={handleInputChange} className="w-full border-b-2 p-3" />
              <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleInputChange} className="w-full border-b-2 p-3" />
              <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} className="w-full border-b-2 p-3" />
            </div>

            <button
              onClick={handleNavigation}
              className={`w-full mt-5 p-3 text-white font-semibold rounded transition duration-300 ease-in-out transform ${
                isLoading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-[#FB2E86] hover:bg-green-600 hover:scale-105"
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Pay Now"}
            </button>
          </form>
        </div>

        <div className="flex-1 bg-[ghostwhite] rounded p-6">
          <h2 className="text-xl font-bold mb-4 text-[#1D3178] family">Order Summary</h2>
          {checkoutItems.length > 0 ? (
            checkoutItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 py-3 border-b">
                <Image src={item.image || "/default-image.png"} alt={item.name} width={64} height={64} className="object-cover rounded" />
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-[#1D3178]">{item.name}</h3>
                  <p className="text-xs text-gray-500">Quantity: {item.quantity}</p>
                </div>
                <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-sm text-red-500"
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500 family">Your cart is empty.</p>
          )}
          <div className="flex justify-between text-right pt-4">
            <p className="text-sm">Subtotal: <span className="font-medium">${subtotal.toFixed(2)}</span></p>
            <p className="text-sm">Discount: <span className="font-medium">-${discount.toFixed(2)}</span></p>
            <p className="text-lg font-semibold">Total: ${total.toFixed(2)}</p>
          </div>
        </div>
      </div>
      <section>
        <Tags/>
      </section>
    </div>
  );
};

export default Checkout;
