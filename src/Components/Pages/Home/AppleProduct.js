import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "../../CSS/PicStyle.css";

const AppleProduct = ({ appleProduct }) => {
  const { _id, img, name, price, description, status } = appleProduct;
  const navigate = useNavigate();
  const handleDetails = (id) => {
    navigate(`/details/${id}`);
  };
  const handleUpdate = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <AnimationOnScroll animateIn="animate__bounceIn" duration={7}>
      <div class="card w-64 bg-base-100 text-black shadow-2xl hover:shadow-inner">
        <figure>
          <img
            className="w-full pic-style"
            src={img}
            alt="Shoes"
            style={{ height: "200px" }}
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            {name}
            <div class="badge badge-orange-700 ">{status}</div>
          </h2>
          <p className="text-xl">
            Price : <span className="text-orange-600 font-bold">${price}</span>{" "}
          </p>
          <p>{description}</p>
          {/* <p>Quantity : {quantity}</p> */}
          {/* <p>Supplier Name : {supplierName}</p> */}
          <div class="flex justify-between">
            <div
              onClick={() => handleDetails(_id)}
              class="badge bg-lime-600 badge-outline p-4 btn text-white  font-bold"
            >
              Details
            </div>
            <div
              onClick={() => handleUpdate(_id)}
              class="badge bg-orange-600 badge-outline p-4 btn text-white  font-bold"
            >
              Stock Update
            </div>
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  );
};

export default AppleProduct;
