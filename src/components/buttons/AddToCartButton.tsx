"use client";

import { ProductData } from "../../../type";

const AddToCart = ({ product }: { product: ProductData }) => {
  const handleClick = async () => {
    // Simulate adding the item to the cart (replace with your own logic if needed)
    console.log("Product added to the cart:", {
      ...product,
      sku: product._id as string,
      currency: "USD",
    });

    // Show a success message
    alert("Product added to your cart!");
  };

  return (
    <button
      onClick={() => handleClick()}
      className="text-[#151875] bg-gray-200 px-4 py-2 rounded-md text-sm lg:text-base"
    >
      Add To Cart
    </button>
  );
};

export default AddToCart;
