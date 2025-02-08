"use client"
import React, { useState } from "react";


const grids = [
  {
    title: "FAQ",
  },
];

const Faq = () => {
  
  const current = grids[0];

  
  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy. Products must be returned in their original condition with proof of purchase.",
    },
    {
      question: "Do you provide international shipping?",
      answer:
        "Yes, we ship internationally. Shipping costs and times may vary depending on the destination.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order has been shipped, you will receive a tracking number via email to track your shipment.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit cards, PayPal, and other secure payment options.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach our customer support team via email at support@example.com or by calling our helpline.",
    },
    {
        question: "How can I contact customer support?",
        answer:
          "You can reach our customer support team via email at support@example.com or by calling our helpline.",
      },
     
        {
          question: "What is your return policy?",
          answer:
            "We offer a 30-day return policy. Products must be returned in their original condition with proof of purchase.",
        },
        {
          question: "How do I track my order?",
          answer:
            "Once your order is shipped, you will receive a tracking number via email to track your shipment.",
        },
        {
          question: "Do you offer international shipping?",
          answer:
            "Yes, we ship to most countries worldwide. Shipping costs and delivery times may vary depending on the destination.",
        },
        {
          question: "How can I contact customer support?",
          answer:
            "You can reach our customer support team by email at support@example.com or by phone at (123) 456-7890.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept Visa, MasterCard, American Express, PayPal, and other secure payment methods.",
        },
        {
          question: "How can I cancel my order?",
          answer:
            "To cancel an order, please contact our support team within 24 hours of placing the order. After that, we may not be able to cancel your order.",
        },
        {
          question: "Can I change my shipping address after placing an order?",
          answer:
            "Once your order is confirmed, we cannot change the shipping address. Please ensure that the address is correct before finalizing the purchase.",
        },
        {
          question: "Do you offer gift cards?",
          answer:
            "Yes, we offer gift cards in various denominations. You can purchase them from our website.",
        },
        {
          question: "How do I use a discount code?",
          answer:
            "To use a discount code, enter the code at checkout in the 'Promo Code' field. The discount will be applied to your total order.",
        },
        {
          question: "What should I do if I receive a damaged item?",
          answer:
            "If you receive a damaged item, please contact our support team within 7 days of delivery with your order number and photos of the damage. We will assist you with a replacement or refund.",
        },
      ];
      


  

  // State to manage active FAQ
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Toggle the FAQ item
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#F6F5FF] py-10 md:py-20 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
        {/* Center Column: Content (Title, Description, Button) */}
        <div className="md:w-1/3 max-w-lg text-center md:text-left flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl family font-bold text-[#101750] leading-tight mt-2 lg:ml-20 ">
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
              Faq
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="min-h-screen  py-10 px-5">
        <div className="max-w-4xl mx-auto bg-[#fff] shadow-md rounded-md p-6">
          {/* Page Title */}
          <h1 className="text-3xl font-bold text-center text-[#151875] mb-8">
            Frequently Asked Questions
          </h1>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b pb-4 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                {/* Question */}
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-[#151875]">
                    {faq.question}
                  </h2>
                  <span className="text-lg text-gray-500">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </div>

                {/* Answer */}
                {activeIndex === index && (
                  <p className="text-sm text-gray-600 mt-2">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
