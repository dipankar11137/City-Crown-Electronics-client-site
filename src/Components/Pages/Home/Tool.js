import React from "react";

const Tool = ({ tool }) => {
  const { name, img, description } = tool;
  return (
    <div class="border sm:w-40 lg:w-60 shadow rounded image-full text-black bg-white hover:shadow-2xl hover:">
      <img
        className="hover:animate-pulse h-40 w-full rounded"
        src={img}
        alt=""
      />

      <div class="flex justify-between mt-2 px-2 pb-2">
        <div>
          <h2 class="card font-bold">{name}</h2>
          <p>{description}</p>
        </div>
        <div class=" ">
          <button class="btn ">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
