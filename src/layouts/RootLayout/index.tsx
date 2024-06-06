import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import Footer from "@/components/Shared/Footer";

const inter = Inter({
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div
      className={`w-full min-h-screen bg-white flex flex-col overflow-hidden ${inter.variable} ${helvetica.variable} font-inter`}
    >
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
