
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "./context/cartContext";
import { WishlistProvider } from "./context/WishlistContext";
import TopBar from "@/components/Topbar";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
import {ClerkProvider} from "@clerk/nextjs"
export const metadata: Metadata = {
  title: "New Figma Hackathon",
  description: "GIAIC Hackathon of Figma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 

  return (
       <ClerkProvider >
       <html lang="en">
         <body>
          
          <CartProvider>
            <WishlistProvider>
              <TopBar />
              <Navbar />
              <Toaster position="top-right" reverseOrder={false} />
              {children}
              <Footer />
              <ToastContainer />
            </WishlistProvider>
          </CartProvider>
        </body>
      </html>
    //  </ClerkProvider>
  );
}
