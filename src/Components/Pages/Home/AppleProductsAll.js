import React, { useEffect, useState } from "react";
import Footer from "../Share/Footer";
import AppleProduct from "./AppleProduct";

const AppleProductsAll = () => {
  const [appleProducts, setAppleProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/appleProducts")
      .then((res) => res.json())
      .then((data) => setAppleProducts(data));
  }, [appleProducts]);
  return (
    <div>
      <div className="bg-slate-200 lg:m-4 rounded-2xl">
        <div className="px-12 mx-auto  mb-4">
          <h1 className="text-primary text-center text-5xl font-bold my-5 p-3">
            Apple <span className="text-neutral">Items</span>
          </h1>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {appleProducts.map((appleProduct) => (
              <AppleProduct
                key={appleProduct._id}
                appleProduct={appleProduct}
              ></AppleProduct>
            ))}
          </div>
          ;
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AppleProductsAll;
