import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const AppleInventory = () => {
  const { id } = useParams();
  const [appleProduct, setAppleProduct] = useState({});
  const [update, setUpdate] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/appleProducts/${id}`)
      .then((res) => res.json())
      .then((data) => setAppleProduct(data));
  }, [update]);

  // delivery
  const handleDeliverd = () => {
    if (appleProduct?.quantity > 0) {
      const newQuantity = parseInt(appleProduct.quantity) - 1;
      const updateQuantity = { quantity: newQuantity };

      fetch(`http://localhost:5000/appleProducts/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateQuantity),
      })
        .then((res) => res.json())
        .then((data) => {
          setUpdate(data);
          toast.success("Product Delivery Successful");
        });
    } else {
      toast.error("Sold Out");
    }
  };

  // Restock
  const handleRestock = (event) => {
    event.preventDefault();
    const newQuantity =
      parseInt(event.target.quantity.value) + parseInt(appleProduct.quantity);
    console.log(newQuantity);
    const updateQuantity = { quantity: newQuantity };
    fetch(`http://localhost:5000/appleProducts/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        setUpdate(data);
        toast.success("Restock Is Successfully");
        event.target.reset();
      });
  };

  return (
    <div className="bg-zinc-300">
      <h2 className="text-primary text-center text-2xl font-bold my-5">
        {appleProduct.name} <span className="text-neutral">Details</span>
      </h2>
      <div className="flex justify-center appleProducts-center">
        <div class="card bg-base-100 shadow-xl">
          <div
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="60"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <figure>
              <img src={appleProduct.img} alt="Shoes" />
            </figure>
          </div>
          <div class="card-body">
            <div
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-delay="60"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <h2 class="card-title">
                {appleProduct.name}
                <div class="badge badge-orange-600">{appleProduct.status}</div>
              </h2>
              <p>{appleProduct.description}</p>
              <p>appleProduct Id No: {appleProduct._id} </p>
              <p>Price : {appleProduct.price} $</p>
              <p>Quantity : {appleProduct.quantity}</p>
              <p>Supplier Name : {appleProduct.supplierName}</p>
            </div>
            <div class="card-actions justify-end">
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="60"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
              >
                <div
                  onClick={() => handleDeliverd()}
                  class="badge p-5 btn-orange-600 text-white cursor-pointer font-bold hover:bg-orange-800"
                >
                  Delivered
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-primary text-center text-2xl font-bold mt-7">
        {appleProduct.name} <span className="text-neutral">Restock</span>
      </h2>
      <div
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay="60"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <div className="flex justify-center appleProducts-center my-5">
          <div class="card  bg-base-100 shadow-xl">
            <div class="card-body appleProducts-center text-center">
              <form onSubmit={handleRestock}>
                <input
                  type="number"
                  name="quantity"
                  id=""
                  placeholder="enter amount"
                  class="input input-bordered input-error "
                />

                <input
                  type="submit"
                  className=" ml-3 btn  btn-primary text-white  font-bold rounded-lg"
                  value="Restock"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppleInventory;
