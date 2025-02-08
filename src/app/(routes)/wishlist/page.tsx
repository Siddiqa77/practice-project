"use client";
import { useWishlist } from "@/app/context/WishlistContext";
import Tags from "@/components/Homepage/Tags";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";

export const dynamic = "force-dynamic";

const WishListPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  
  const handleRemove = (id: string) => {
    removeFromWishlist(id);
  
    Swal.fire("Item successfully removed from wishlist");
    setTimeout(() => (null), 1000);
  };
   
const grids = [
  {
    title: "My WishList",
  },
];

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
            <div className="text-[#000000] text-[16px] font-normal lato cursor-pointer hover:text-[#fb2448] transition">
              Home
            </div>
            <div className="text-[#000] text-[16px] font-normal lato cursor-pointer hover:text-[#fb2448] transition">
              Pages
            </div>
            <div className="text-[#FB2E86] text-[16px] font-normal lato cursor-pointer hover:text-[#fb2448] transition">
              Wishlist
            </div>
          </div>
        </div>
      </section>
    <main className=" mx-auto p-4">
      <section className=" wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-10 place-items-center mt-16">
        {wishlist.length === 0 ? (
          <p className="text-center family text-2xl font-semibold">No products in wishlist</p>
        ) : (
          wishlist.map((item) => (
            <div key={item.id} className="relative bg-[#ffffff] p-4 rounded-lg shadow-md hover:shadow-xl transform transition-transform duration-300 hover:scale-105">
              {/* Remove Button */}
              <button
                onClick={() => handleRemove(item.id)}
                className="absolute top-2 right-2  bg-black text-white px-2 py-1 rounded-full transition-all hover:bg-red-800"
              >
                x
              </button>

              <Link href={`/product/${item.id}`} className="block h-[400px]">
                <div className="bg-slate-100 w-full h-[250px] flex justify-center items-center mb-4 ">
                  <Image src={item.image} alt={item.name} width={150} height={150} className="object-contain" />
                </div>
                <div className="flex flex-col items-center">
                  <h1 className="text-lg text-center font-bold text-indigo-950">{item.name}</h1>
                  <div className="flex justify-center gap-x-3 mt-3 text-sm">
                    <p className="text-indigo-900">${item.price}.00</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        )}
      </section>
     
    </main>
    <Tags/>
    </div>
  );
};

export default WishListPage;
