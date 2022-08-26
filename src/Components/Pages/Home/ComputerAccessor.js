import React from "react";

const ComputerAccessor = ({ computerAccessor }) => {
  const { img, name, price } = computerAccessor;
  return (
    <div class="card lg:w-52 bg-base-100 shadow-xl mt-5 hover:shadow-inner hover:border-1 ">
      <figure>
        <img
          className="w-full h-40	hover:animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite hover:animate-pulse"
          src={img}
          alt={name}
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          {name}
          <div class="badge badge-secondary">NEW</div>
        </h2>
        <h1 className="text-orange-500 text-xl">$ {price}</h1>
      </div>
    </div>
  );
};

export default ComputerAccessor;
