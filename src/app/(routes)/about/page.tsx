import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const grids = [
  {
    title: "About Us",
  },
];

const About = () => {

  const current = grids[0];
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
              <div className="text-[#000000] text-[16px] font-normal font-['Lato'] cursor-pointer hover:text-[#fb2448] transition">
                Home
              </div>
              <div className="text-[#000] text-[16px] font-normal font-['Lato'] cursor-pointer hover:text-[#fb2448] transition">
                Pages
              </div>
              <button className="text-[#FB2E86] text-[16px] font-normal font-['Lato'] cursor-pointer hover:text-[#fb2448] transition">
                Order Completed
              </button>
            </div>
          </div>
        </section>

       {/* Main section */}
      <section className="text-gray-600 body-font wrapper">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 bg-[#F9F1E7]">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src="/about.png"
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-[36px] text-3xl mb-4 font-bold text-[#151875] family tracking-[3px]">
      Know About Our Ecomerce
      Business, History
      </h1>
      <p className="mb-8 leading-relaxed lato text-[#8A8FB9] text-base">
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sequi eius quidem corporis aliquid, corrupti nesciunt doloremque. Quos voluptatem consequatur distinctio fugit, officiis eligendi, recusandae tempore culpa, dolor quidem assumenda?

      </p>
      <div className="flex justify-center">
        <button className="px-8 py-3 bg-[#FB2E86] text-center lato text-[#fff] font-semibold text-[18px] rounded-[3px] transition-all duration-300 ease-in-out">
        <Link href="/">Contact Us</Link>
        </button>
       
      </div>
    </div>
  </div>
</section>

<section className='wrapper'>
   {/* Heading */}
   <h2 className="text-3xl family font-bold text-center text-[#1A0B5B] mb-10 ">
        Our Features
      </h2>
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center ">
        {/* First Card */}
        <div className="relative bg-[#fff] flex flex-col items-center justify-center p-6  rounded-lg ">
          {/* Top Image */}
          <img
            src="/supportpic1.png"
            alt="24/7 Support"
            className="w-16 h-16 object-contain mb-4"
          />
          {/* Text Content */}
          <h3 className="text-[#151875] text-base md:text-lg font-semibold mb-2 family">
            24/7 Support
          </h3>
          <p className="text-[#1a0b5b]/30 text-sm md:text-base font-medium leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
          </p>
        </div>

        {/* Second Card */}
        <div className="relative bg-[#fff] flex flex-col items-center justify-center p-6  rounded-lg">
          {/* Top Image */}
          <img
            src="/supportpic2.png"
            alt="Secure Payment"
            className="w-16 h-16 object-contain mb-4"
          />
          {/* Text Content */}
          <h3 className="text-[#151875] text-base md:text-lg font-semibold mb-2 family">
            Secure Payment
          </h3>
          <p className="text-[#1a0b5b]/30 text-sm md:text-base font-medium leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
          </p>
        </div>

        {/* Third Card */}
        <div className="relative bg-[#fff] flex flex-col items-center justify-center p-6  rounded-lg">
          {/* Top Image */}
          <img
            src="/supportpic3.png"
            alt="Fast Delivery"
            className="w-16 h-16 object-contain mb-4"
          />
          {/* Text Content */}
          <h3 className="text-[#151875] text-base md:text-lg font-semibold mb-2 family">
            Fast Delivery
          </h3>
          <p className="text-[#1a0b5b]/30 text-sm md:text-base font-medium leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
          </p>
        </div>

        {/* Fourth Card */}
        <div className="relative bg-[#fff] flex flex-col items-center justify-center p-6  rounded-lg">
          {/* Top Image */}
          <img
            src="/supportpic4.png"
            alt="Easy Returns"
            className="w-16 h-16 object-contain mb-4"
          />
          {/* Text Content */}
          <h3 className="text-[#151875] text-base md:text-lg font-semibold mb-2 family">
            Easy Returns
          </h3>
          <p className="text-[#1a0b5b]/30 text-sm md:text-base font-medium leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
          </p>
        </div>
      </div>
</section>

<section className='wrapper'>
<h2 className="text-3xl family font-bold text-center text-[#1A0B5B] mb-10 mt-[90px] ">
        Our Client Stay!
      </h2>

      <div className="w-full max-w-2xl mx-auto p-4">
  {/* Content Section */}
  <div className="w-full h-auto flex flex-col items-center">
    <div className="text-center mb-4">
      <div className="text-xl sm:text-2xl font-semibold leading-snug">Selina Gomez</div>
      <div className="text-sm text-[#8a8fb9] font-semibold">CEO At Webecy Digital</div>
    </div>
    <div className="text-center text-[#8A8FB9] text-sm sm:text-base font-semibold px-4 lato">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.
    </div>
    <div className="flex justify-center gap-2 mt-4">
      <div className="w-6 h-1 bg-[#fb2e86] rounded-full"></div>
      <div className="w-4 h-1 bg-[#ff75b0] rounded-full"></div>
      <div className="w-4 h-1 bg-[#ff75b0] rounded-full"></div>
    </div>
  </div>

  {/* Images Section */}
  <div className="w-full flex justify-center gap-4 mt-8">
    <div className="w-14 h-14 rounded-sm bg-[#c4c4c4] overflow-hidden">
      <Image
        className="w-full h-full object-cover"
        src="/client.png"
        alt="client1"
        width={55}
        height={55}
      />
    </div>
    <div className="w-14 h-14 rounded-sm overflow-hidden">
      <Image
        className="w-full h-full object-cover"
        src="/client2.png"
        alt="client2"
        width={55}
        height={55}
      />
    </div>
    <div className="w-14 h-14 rounded-sm bg-[#c4c4c4] overflow-hidden">
      <Image
        className="w-full h-full object-cover"
        src="/client3.png"
        alt="client3"
        width={55}
        height={55}
      />
    </div>
  </div>
</div>

</section>
    </div>
  )
}

export default About