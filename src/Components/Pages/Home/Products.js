import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <div className="grid justify-items-center">
        <div class="text-6xl font-extrabold mb-5 text-center">
          <span class=" bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 uppercase ">
            Our Main Products
          </span>
        </div>
        <div class="card w-10/12 text-black">
          <div class="overflow-x-auto w-full">
            <table class="table w-full text-center">
              <thead>
                <tr>
                  <th className="bg-red-600 text-white text-lg">Name</th>
                  <th className="bg-indigo-700 text-white text-lg">price</th>
                  <th className="bg-orange-600 text-white text-lg">Quantity</th>
                  <th className="bg-lime-700 text-white text-lg">
                    Supplier Name
                  </th>
                  <th className="bg-rose-700 text-white text-lg">Date</th>
                  <th className="bg-sky-500 text-white text-lg">Details</th>
                  <th className="bg-fuchsia-700 text-white text-lg">
                    Add To Card
                  </th>
                </tr>
              </thead>
              {products.slice(0, 6).map((product) => (
                <Product key={product._id} product={product}></Product>
              ))}
            </table>
          </div>
        </div>
      </div>
      <div className="grid justify-items-end lg:pr-32 my-3">
        <Link to="/showAllProducts">
          <button className="btn font-bold">Show All </button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
