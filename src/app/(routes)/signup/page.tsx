"use client";
import { useState } from "react";
import Tags from "@/components/Homepage/Tags";
import Link from "next/link";

const grids = [
  {
    title: "Sign Up",
  },
];

export default function Signup() {
  const current = grids[0];

  // State Management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  // Form Change Handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Form Submission Handler
  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, password } = formData;

    // Validation
    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    console.log("Signing up with:", formData);
    setError("");
    alert("Signup successful!");
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
              Sign Up
            </div>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <main className="container mx-auto px-4 flex flex-col items-center">
        <div className="bg-[#fff] shadow-md rounded-lg p-8 mt-12 max-w-md w-full">
          <h2 className="text-[32px] family font-bold text-center text-[#000]">
            Create Account
          </h2>
          <p className="text-center text-[#9096B2] font-['Lato'] text-[17px] mb-6">
            Please sign up with your details below.
          </p>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSignup}>
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <button
              type="submit"
              className="bg-[#FB2E86] text-[#fff] w-full py-3 rounded-lg font-semibold hover:font-bold transition duration-300 ease-in-out transform hover:bg-pink-700 hover:scale-105"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-[#9096B2] font-['Lato'] text-[17px] mt-6">
            Already have an account?{" "}
            <Link href="/myaccount" className="text-[#FB2E86] hover:underline">
              Login
            </Link>
          </p>
        </div>
      </main>
      <Tags />
    </div>
  );
}
