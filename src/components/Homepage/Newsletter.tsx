import React from "react";

const Newsletter = () => {
  return (
    <div className="relative w-full h-auto mb-20">
      {/* Background Image */}
      <img
        className="w-full h-[462px] object-cover"
        src="/newsletterpic.png"
        alt="Newsletter Background"
      />
      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-[#151875] family text-2xl sm:text-3xl md:text-4xl lg:text-[35px] font-bold font-['Josefin Sans'] leading-tight lg:tracking-[0.525px] px-4">
          Get Latest Update By Subscribe
          <br />
          Our Newsletter
        </h1>
        <button className="mt-4 bg-[#FB2E86] text-[#fff] font family px-6 py-2 hover:bg-red-400 transition tracking-[0.34px]">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
