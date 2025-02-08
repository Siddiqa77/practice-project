"use client";

import { useState } from "react";
import Tags from "@/components/Homepage/Tags";
import Link from "next/link";

const grids = [
  {
    title: "My Account",
  },
];

export default function MyAccount() {
  const current = grids[0];

  // State Management
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Form Submission Handler
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Simulate login process
    console.log("Logging in with:", { email, password });

    // Clear the error
    setError("");

    // Redirect or further logic
    alert("Login successful!");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#F6F5FF] py-10 md:py-20 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
        <div className="md:w-1/3 max-w-lg text-center md:text-left flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl family font-bold text-[#101750] leading-tight mt-2 lg:ml-20">
            {current.title}
          </h1>
          <div className="flex flex-wrap justify-center gap-6 mb-10 mr-4 lg:mr-20">
            <div className="text-[#000000] text-[16px] font-normal font-['Lato'] cursor-pointer hover:text-[#fb2448] transition">
              Home
            </div>
            <div className="text-[#000] text-[16px] font-normal font-['Lato'] cursor-pointer hover:text-[#fb2448] transition">
              Pages
            </div>
            <div className="text-[#FB2E86] text-[16px] font-normal font-['Lato'] cursor-pointer hover:text-[#fb2448] transition">
              My Account
            </div>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <main className="container mx-auto px-4 flex flex-col items-center">
        <div className="bg-[#fff] shadow-md rounded-lg p-8 mt-12 max-w-md w-full">
          <h2 className="text-[32px] family font-bold text-center text-[#000]">
            Login
          </h2>
          <p className="text-center text-[#9096B2] font-['Lato'] text-[17px] mb-6">
            Please login using account details below.
          </p>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleLogin}>
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
            <div>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div className="text-right">
              <a href="#" className="text-sm text-gray-500 hover:text-pink-500">
                Forgot your password?
              </a>
            </div>
            <button
              type="submit"
              className="bg-[#FB2E86] text-[#fff] w-full py-3 rounded-lg font-semibold  transition duration-300 ease-in-out transform hover:bg-pink-700 hover:scale-105"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-[#9096B2] font-['Lato'] text-[17px] mt-6">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-[#FB2E86] hover:underline">
              Create account
            </Link>
          </p>
        </div>
      </main>
      <Tags />
    </div>
  );
}
