import React from "react";
import Hero from "../components/Home/Hero";
import AboutUs from "../components/Home/Aboutus";
import NewArrivals from "../components/Home/Newarrival";
import Mens from "../components/Home/Mens";
import SplitScreenCouple from "../components/Home/Split";
export default function Main() {
  return (
    <>
      <Hero />
      <AboutUs />
      <NewArrivals />
      <SplitScreenCouple />
      <Mens />
    </>
  );
}
