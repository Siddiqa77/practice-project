import Link from 'next/link'


const Detailpage = () => {
  return (
    <div>
        {/* Hero Section */}
      <section className="relative bg-[#F6F5FF] py-10 md:py-20 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
        <div className="md:w-1/3 max-w-lg text-center md:text-left flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#101750] leading-tight mt-2 lg:ml-20 family">
            Product Details
          </h1>
          <div className="flex flex-wrap justify-center gap-6 mb-10 mr-4 lg:mr-20">
            <Link href="/">
              <span className="text-[#000000] text-[16px] cursor-pointer hover:text-[#fb2448] transition lato">
                Home
              </span>
            </Link>
            <Link href="/shop">
              <span className="text-[#FB2E86] text-[16px] cursor-pointer hover:text-[#fb2448] transition lato">
                Pages
              </span>
            </Link>
            <Link href="/shop">
              <span className="text-[#FB2E86] text-[16px] cursor-pointer hover:text-[#fb2448] transition lato">
                Product Details
              </span>
            </Link>
          </div>
        </div>
      </section>
      {/* Hero section end */}

    </div>
  )
}

export default Detailpage