import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface MainComponentProps {
  children: React.ReactNode;
}

export default function MainComponent({ children }: MainComponentProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
