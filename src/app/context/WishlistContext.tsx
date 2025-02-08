"use client";
import { createContext, useContext, useState, useEffect } from "react";

interface Wishlist {
  id: string;
  image: string;
  name: string;
  color?: string;
  size?: string;
  price: number;
  quantity: number;
}

interface WishlistContextType {
  wishlist: Wishlist[];
  addToWishlist: (item: Wishlist) => void;
  removeFromWishlist: (id: string) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

export const WishlistProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [wishlist, setWishlist] = useState<Wishlist[]>([]);

  // Ensure localStorage is accessed only on the client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedWishlistItems = localStorage.getItem("wishlist");
      if (savedWishlistItems) {
        setWishlist(JSON.parse(savedWishlistItems));
      }
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined" && wishlist.length > 0) {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  }, [wishlist]);

  const addToWishlist = (item: Wishlist) => {
    setWishlist((prev) => {
      const exists = prev.some((prod) => prod.id === item.id);
      if (!exists) {
        return [...prev, item];
      }
      return prev;
    });
  };

  const removeFromWishlist = (id: string) => {
    setWishlist((prev) => prev.filter((prod) => prod.id !== id));
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
