import React from "react";
import Footer from "../Share/Footer";
import Banner from "./Banner";
import Products from "./Products";
import Tools from "./Tools";

const Home = () => {
  return (
    <div className="bg-backgroundColor text-white">
      <Banner />
      <Products />
      <Tools />
      <Footer />
    </div>
  );
};

export default Home;
