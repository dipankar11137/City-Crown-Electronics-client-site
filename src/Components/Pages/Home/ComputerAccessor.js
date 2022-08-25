import React from "react";

const ComputerAccessor = ({ computerAccessor }) => {
  const { img, name } = computerAccessor;
  return (
    <div class="card lg:w-52 bg-base-100 shadow-xl mt-5 hover:shadow-inner hover:border-2 ">
      <figure>
        <img
          className="w-full 	hover:animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite"
          src={img}
          alt={name}
        />
      </figure>
      <div class="card-body hover:bg-info">
        <h2 class="card-title">
          {name}
          <div class="badge badge-secondary">NEW</div>
        </h2>
      </div>
    </div>
  );
};

export default ComputerAccessor;
