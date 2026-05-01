"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Loader from "./components/preloader";
import Footer from "./components/Footer";

export default function ClientWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
