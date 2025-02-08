"use client";
import React, { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripePage from "@/components/stripePage";
import convertToSubcurrency from "../../../lib/convertToSubCurrency";

interface CheckoutItem {
  id: number;
  title: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  currency: string;
}

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Home() {
  const [checkoutItems, setCheckoutItems] = useState<CheckoutItem[]>([]);
  const [customerName, setCustomerName] = useState<string>("");

  useEffect(() => {
    const storedItems = localStorage.getItem("checkoutItems");
    const storedName = localStorage.getItem("customerName"); // Get the customer's name from localStorage

    if (storedItems) {
      try {
        const parsedItems: CheckoutItem[] = JSON.parse(storedItems);
        if (Array.isArray(parsedItems)) {
          setCheckoutItems(parsedItems);
        }
      } catch (error) {
        console.error("Error parsing checkout items:", error);
      }
    }

    if (storedName) {
      setCustomerName(storedName); // Set the name if it exists
    }
  }, []);

  const subtotal = checkoutItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.1; // Example discount
  const total = subtotal - discount;

  const amount = convertToSubcurrency(total);

  return (
    <main className="max-w-6xl mx-auto p-10 text-[#fff] family text-center border m-10 rounded-md bg-gradient-to-tr from-slate-500 to-pink-900">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">
          {customerName || "Siddiqa"}
        </h1>{" "}
        {/* Dynamically set name */}
        <h2 className="text-2xl">
          has requested After Discount 
          <span className="font-bold"> ${total.toFixed(2)}</span>
        </h2>
      </div>

      <div className="text-left mb-5">
        <h3 className="text-xl font-semibold">Your Products:</h3>
        {checkoutItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          checkoutItems.map((item) => (
            <div key={item.id} className="flex justify-between py-2">
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover mr-3"
                />
                <span>{item.name}</span>
              </div>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))
        )}
      </div>

      {checkoutItems.length > 0 && (
        <Elements
          stripe={stripePromise}
          options={{
            mode: "payment",
            amount: total, // Make sure `total` is correctly defined
            currency: "usd",
          }}
        >
          <StripePage checkoutItems={checkoutItems} amount={total} />
        </Elements>
      )}
    </main>
  );
}
