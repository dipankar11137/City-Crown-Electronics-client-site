import React from "react";
import Footer from "../Share/Footer";
import Add from "./Add";
import Banner from "./Banner";
import ComputerAccessories from "./ComputerAccessories";
import Products from "./Products";
import Tools from "./Tools";

const Home = () => {
  return (
    <div className="bg-slate-200 text-white">
      {/* <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="">
          <Add />
        </div>
        <div className="sm:col-span-3 lg:col-span-2">
          <Banner />
        </div>
      </div> */}
      <Banner />
      <Add />
      <Products />
      <ComputerAccessories />
      <Tools />

      <Footer />
    </div>
  );
};

export default Home;
