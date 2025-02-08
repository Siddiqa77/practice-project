"use client";

import Link from "next/link";
import * as React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import styles for react-toastify

// Sample data
const grids = [
  {
    title: "Contact Us",
  },
];

// Contact Info Card Component
const ContactInfoCard = ({ icon, title, description, color }: any) => (
  <div
    className="flex items-center p-4 border border-gray-300 rounded-md"
    style={{ borderColor: color }}
  >
    <div
      className="h-10 w-10 flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      {icon}
    </div>
    <div className="ml-4">
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-sm">{description}</p>
    </div>
  </div>
);

const Contact = () => {
  const current = grids[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    // Simple Validation
    if (!name || !email || !subject || !message) {
      toast.error("All fields are required. Please fill them in.");
      return;
    }

    // Simulate successful submission
    console.log({ name, email, subject, message });
    toast.success("Your message has been sent successfully!");
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#F6F5FF] py-10 md:py-20 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
        <div className="md:w-1/3 max-w-lg text-center md:text-left flex flex-col justify-center">
          <h1 className="text-3xl family md:text-4xl font-bold text-[#101750] leading-tight mt-2 lg:ml-20">
            {current.title}
          </h1>
          <div className="flex flex-wrap justify-center gap-6 mb-10 mr-4 lg:mr-20">
            <div className="text-[#000000] text-[16px] font-normal cursor-pointer hover:text-[#fb2448] lato transition">
              Home
            </div>
            <div className="text-[#000] text-[16px] font-normal cursor-pointer hover:text-[#fb2448] lato transition">
              Pages
            </div>
            <div className="text-[#FB2E86] text-[16px] font-normal cursor-pointer hover:text-[#fb2448] lato transition">
              Contact Us
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="container md:w-[1177px] mx-auto px-4 py-16">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Side: Contact Info */}
          <div>
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-[#151875] mb-4 family">
                Information About Us
              </h2>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices mattis aliquam, malesuada diam est.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="h-8 w-8 rounded-full bg-[#7E33E0] flex items-center justify-center text-white"
                >
                  f
                </Link>
                <Link
                  href="#"
                  className="h-8 w-8 rounded-full bg-[#FB2E86] flex items-center justify-center text-white"
                >
                  t
                </Link>
                <a
                  href="#"
                  className="h-8 w-8 rounded-full bg-[#5625DF] flex items-center justify-center text-white"
                >
                  in
                </a>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-4xl font-bold text-[#151875] family mb-6">
                Contact Way
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <ContactInfoCard
                  icon={<span className="h-5 w-5">📞</span>}
                  title="Tel: 877-67-88-99"
                  description="E-Mail: shop@store.com"
                  color="#7E33E0"
                />
                <ContactInfoCard
                  icon={<span className="h-5 w-5">📧</span>}
                  title="Support Forum"
                  description="For over 24hr"
                  color="#FB2E86"
                />
                <ContactInfoCard
                  icon={<span className="h-5 w-5">📍</span>}
                  title="20 Margaret st, London"
                  description="Great Britain, 3NM98-LK"
                  color="#FFB265"
                />
                <ContactInfoCard
                  icon={<span className="h-5 w-5">🚚</span>}
                  title="Free Standard Shipping"
                  description="On all orders."
                  color="#1BE982"
                />
              </div>
            </div>

            <div>
              <h2 className="text-4xl family font-bold text-[#151875] mb-6">
                Get In Touch
              </h2>
              <p className="text-gray-500 lato">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices tristique amet erat vitae eget dolor lobortis
                quis bibendum quam.
              </p>
              <form
                onSubmit={handleSubmit}
                className="space-y-6 mt-6 md:pl-2 w-full"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    name="name"
                    placeholder="Your Name*"
                    required
                    className="border rounded-[4px] border-gray-500 p-3"
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Your E-mail*"
                    required
                    className="border rounded-[4px] border-gray-500 p-3"
                  />
                </div>
                <input
                  name="subject"
                  placeholder="Subject"
                  required
                  className="border rounded-[4px] border-gray-500 p-3 w-full"
                />
                <textarea
                  name="message"
                  placeholder="Type Your Message"
                  required
                  className="min-h-[150px] border rounded-[4px] border-gray-500 p-3 w-full"
                />
                <button
                  type="submit"
                  className="bg-[#FB2E86] lato rounded-[4px] px-10 py-3 text-[#fff] hover:bg-[#FB2E86]/90 hover:font-bold transition duration-300 ease-in-out transform hover:bg-pink-700 hover:scale-105"
                >
                  Send Mail
                </button>
              </form>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="relative transform transition-transform duration-300 hover:scale-105">
            <img
              src="/contactpic.png"
              alt="Contact illustration"
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <ToastContainer />
    </div>
  );
};

export default Contact;
