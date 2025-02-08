// "use client"
// import Link from "next/link";
// import { data } from "@/app/data";
// import Image from "next/image";


// const Demosidebar = () => {

//   const handleProceedToCheckout = () => {
   
//     console.log("Proceeding to checkout");
//   };
//   return (
//     <div className="mt-16 md:mt-[200px] md:w-1/3 md:ml-8">
//       {data.map((data) => (
//         <div
//           key={data.id}
//           className="flex w-full items-center gap-4 p-4 border rounded-md mb-4"
//         >
//          <div className="flex gap-4">
//          <Image
//             className="w-20 h-20 object-cover rounded-md"
//             src={data.imageUrl || "/default-image.png"}
//             alt={data.title}
//             width={100}
//             height={100}
//           />
         
//          </div>
//           <div className="flex-grow">
//             <h4 className="text-black text-sm font-medium">{data.title}</h4>
//             <p className="text-[lightsteelblue] text-xs">Color: {data.color}</p>
//             <p className="text-[lightsteelblue] text-xs">Size: {data.size}</p>
//           </div>
//           <span className="text-blue-900 font-medium text-sm">
//             ${data.price.toFixed(2)}
//           </span>
//         </div>
//       ))}

//       <div className="p-6 bg-[#E8E6F1] rounded-md">
//         <div className="flex justify-between">
//           <span className="text-lg font-medium">Subtotal</span>
//           <span className="text-lg font-medium">£219.00</span>
//         </div>
//         <div className="flex justify-between mt-4">
//           <span className="text-lg font-medium">Total</span>
//           <span className="text-lg font-medium">£325.00</span>
//         </div>
//         <p className="text-xs text-[#8A91AB] mt-4">
//           ✅ Shipping & taxes calculated at checkout
//         </p>
//         <Link href={`/completeorder`}>
//              <button
//                 onClick={handleProceedToCheckout}
//                 className="w-full bg-[#19D16F] text-white py-2 rounded-md mt-3"
//               >
//                 Proceed to Complete
//               </button>
//              </Link>
//       </div>
//     </div>
//   );
// };

// export default Demosidebar;

"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Swal from "sweetalert2";

const Demosidebar = () => {
  const [checkoutItems, setCheckoutItems] = useState<any[]>([]);

  // ✅ Local Storage se checkout items fetch karna
  useEffect(() => {
    const storedItems = localStorage.getItem("checkoutItems");
    if (storedItems) {
      setCheckoutItems(JSON.parse(storedItems));
    }
  }, []);

  // ✅ Checkout proceed karne ka function
  const handleProceedToCheckout = () => {
    if (checkoutItems.length === 0) {
      Swal.fire({
        title: "No items in cart!",
        text: "Please add some products before proceeding.",
        icon: "warning",
      });
      return;
    }

    // ✅ Alert before proceeding
    Swal.fire({
      title: "Proceeding to Checkout",
      text: "Redirecting to order completion...",
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
    });

    setTimeout(() => {
      window.location.href = "/completeorder"; // ✅ Redirect
    }, 2000);
  };

  return (
    <div className="mt-16 md:mt-[200px] md:w-1/3 md:ml-8">
      {/* ✅ Dynamically Show Checkout Items */}
      {checkoutItems.map((item) => (
        <div key={item.id} className="flex w-full items-center gap-4 p-4 border rounded-md mb-4">
          <div className="flex gap-4">
            <Image
              className="w-20 h-20 object-cover rounded-md"
              src={item.image || "/default-image.png"}
              alt={item.name}
              width={100}
              height={100}
            />
          </div>
          <div className="flex-grow">
            <h4 className="text-black text-sm font-medium">{item.name}</h4>
            <p className="text-[lightsteelblue] text-xs">Color: {item.color}</p>
            <p className="text-[lightsteelblue] text-xs">Size: {item.size}</p>
          </div>
          <span className="text-blue-900 font-medium text-sm">${item.price.toFixed(2)}</span>
        </div>
      ))}

      {/* ✅ Checkout Summary */}
      <div className="p-6 bg-[#E8E6F1] rounded-md">
        <div className="flex justify-between">
          <span className="text-lg font-medium">Subtotal</span>
          <span className="text-lg font-medium">
            ${checkoutItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between mt-4">
          <span className="text-lg font-medium">Total</span>
          <span className="text-lg font-medium">
            ${(checkoutItems.reduce((total, item) => total + item.price, 0) + 10).toFixed(2)}
          </span>
        </div>
        <p className="text-xs text-[#8A91AB] mt-4">
          ✅ Shipping & taxes calculated at checkout
        </p>

        {/* ✅ Proceed to Checkout Button */}
        <button onClick={handleProceedToCheckout} className="w-full bg-[#19D16F] text-white py-2 rounded-md mt-3">
          Proceed to Complete
        </button>
      </div>
    </div>
  );
};

export default Demosidebar;
