"use client"; 
import Tags from "@/components/Homepage/Tags";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PaymentSuccess = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="mt-10 md:mt-[100px] flex flex-col items-center">
        <div className="w-[100px] h-[100px] mb-6"> 
          <Image src="/success.png" alt="Success" width={100} height={100} />
        </div>

        <div className="w-full max-w-lg text-center text-[#101750] text-4xl font-bold mb-6">
          Payment Successful!
        </div>

        <div className="text-[#8d92a7] md:w-[850px] text-base font-semibold leading-[30px] mb-4 px-5 text-center">
          Thank you for your purchase! Your payment has been successfully processed.
        </div>

        <div className="w-full flex justify-center">
          <Link href="/" className="w-52 h-[59px] bg-[#ff1788] rounded-[3px] flex justify-center items-center">
            <button className="text-center text-white text-base font-semibold leading-[30px]">
              Continue Shopping
            </button>
          </Link>
        </div>

        <div className="w-[65px] h-[65px] bg-white rounded-full mt-4"></div>
      </div>

      <Tags />
    </div>
  );
};

export default PaymentSuccess;
