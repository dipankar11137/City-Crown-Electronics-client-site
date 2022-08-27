import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Share/Footer";
import AppleProducts from "./AppleProducts";

const AppleProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/appleProducts/${id}`)
      // fetch(`http://localhost:5000/mainProducts/630a038e7ca3ac7a7840ba2c`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [product]);
  return (
    <div className="bg-lime-50 pt-3 h-screen">
      <div className="flex justify-center pb-16">
        <div class="card w-80 bg-base-100 text-black shadow-2xl ">
          <figure>
            {/* <img
              className="w-full"
              src={product?.img}
              alt="Shoes"
              style={{ height: "200px" }}
            /> */}
            <div class="carousel carousel-center rounded-box ">
              <div class="carousel-item">
                <img className="w-64" src={product?.img} alt="Pizza" />
              </div>
              <div class="carousel-item">
                <img className="w-64" src={product?.img3} alt="Pizza" />
              </div>
              <div class="carousel-item">
                <img className="w-64" src={product?.img2} alt="Pizza" />
              </div>
              <div class="carousel-item">
                <img className="w-64" src={product?.img} alt="Pizza" />
              </div>
              <div class="carousel-item">
                <img className="w-64" src={product?.img3} alt="Pizza" />
              </div>
              <div class="carousel-item">
                <img className="w-64" src={product?.img2} alt="Pizza" />
              </div>
              <div class="carousel-item">
                <img className="w-64" src={product?.img} alt="Pizza" />
              </div>
            </div>
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              {product?.name}
              <div class="badge badge-orange-700 ">{product?.status}</div>
            </h2>
            <p className="text-xl">
              Price :{" "}
              <span className="text-orange-600 font-bold">
                ${product?.price}
              </span>{" "}
            </p>
            <p>{product?.description}</p>
            <p>Quantity : {product?.quantity}</p>
            <p>Supplier Name : {product?.supplierName}</p>
          </div>
        </div>
      </div>
      <AppleProducts />
      <Footer />
    </div>
  );
};

export default AppleProductDetails;
