import React from "react";

const MyItem = ({ item }) => {
  const { img, name, description, price } = item;
  return (
    <div class="card lg:card-side bg-base-100 shadow-xl text-black ">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <h3>$ {price}</h3>
        <p>{description}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-lime-500">Details</button>
          <button class="btn btn-orange-500">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default MyItem;
