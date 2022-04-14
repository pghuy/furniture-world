import React from "react";
import styled from "styled-components";
import Overview from "../components/HomePageComponents/Overview";
import FeaturedProducts from "../components/HomePageComponents/FeaturedProducts";
import Services from "../components/HomePageComponents/Services";
import Contact from "../components/HomePageComponents/Contact";
const HomePage = () => {
  return (
    <main>
      <Overview />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};
export default HomePage;
