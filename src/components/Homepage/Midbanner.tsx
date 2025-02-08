import Link from 'next/link'
import React from 'react'

const Midbanner = () => {
  return (
    <div>
<div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between bg-[#F1F0FF]">
      {/* Left Section - Image */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0 transform transition-transform duration-300 hover:scale-105">
        <div className="bg-pink-100 rounded-full w-[300px] h-[300px] md:w-[400px] md:h-[400px] absolute"></div>
        <img
          src="/midbannerpic.png" 
          alt="Sofa"
          className="relative w-[250px] md:w-[350px] h-auto"
        />
      </div>

      {/* Right Section - Text */}
      <div className="w-full md:w-1/2 flex flex-col items-start md:items-start px-4 md:px-0 space-y-6">
        <h2 className="text-[#151875] text-[24px] md:text-[30px] family lg:text-[36px] font-bold tracking-[0.525px]">
          Unique Features Of Latest &<br /> Trending Products
        </h2>
        <ul className="space-y-4 font-['Lato] text-[16px] font-medium tracking-[0.24px]">
          <li className="flex items-center text-[#7E81A2] text-sm md:text-base">
            <span className="w-4 h-4 bg-red-500 rounded-full mr-3"></span>
            All frames constructed with hardwood solids and laminates
          </li>
          <li className="flex items-center text-[#7E81A2] text-sm md:text-base">
            <span className="w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
            Reinforced with double wood dowels, glue, screw - nails corner <br /> blocks and machine nails
          </li>
          <li className="flex items-center text-[#7E81A2] text-sm md:text-base">
            <span className="w-4 h-4 bg-teal-500 rounded-full mr-3"></span>
            Arms, backs, and seats are structurally reinforced
          </li>
        </ul>
        <div className="flex items-center space-x-4 mt-6">
         <Link href="/shoppingcart">
         <button className="bg-pink-500 text-[#fff] family py-2 px-6 text-[17px] md:text-base hover:bg-pink-600 transition">
            Add To Cart
          </button></Link>
          <div>
            <p className="text-[#1A0B5B] font-semibold text-sm md:text-base">B&B Italian Sofa</p>
            <p className="text-[#7E81A2] text-sm md:text-base">$32.00</p>
          </div>
        </div>
      </div>
    </div>


       
    </div>
  )
}

export default Midbanner