import React from "react";
import { Link } from "react-router-dom";
import fifty from "../../Images/Add/fifty1.jpg";
import speacialOffer from "../../Images/Add/speacial offer.jpg";
import "../../CSS/Banner.css";

const Add = () => {
  return (
    // <div className="relative h-scren w-screen ">
    <div div className="relative h-scren w-screen ">
      <img className="object-fill sliderImg w-screen" src={fifty} alt="" />
      <div className="absolute1 flex flex-col  justify-start">
        <div>
          <p className="heroP uppercase text-white "> Running Sneakers </p>
        </div>
        <div>
          <h1 className="heroHead text-start ">Men's like flex</h1>
        </div>
        <div>
          <p className="heroP text-white pb-4 ">
            {" "}
            Lorem ipsum dolor amet consectetur <br />
            adipisicing Nobis, excepturi.{" "}
          </p>
        </div>

        <div className=" flex justify-start">
          <Link
            to="/allshoes"
            style={{ backgroundColor: "#232324" }}
            className="btn heroBtn text-italic btn-sm bg-black"
          >
            Buy now
          </Link>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Add;
