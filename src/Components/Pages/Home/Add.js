import React from "react";
import fifty from "../../Images/Add/fifty1.jpg";
import speacialOffer from "../../Images/Add/speacial offer.jpg";

const Add = () => {
  return (
    <div className="flex lg:ml-20 justify-center">
      <div className="shadow-yellow-400 ">
        <img
          className="h-32 w-80 rounded contrast-200 scale-75 rotate-12 hover:translate-y-1 hover:skew-y-2 hover:animate-ping"
          src={speacialOffer}
          alt=""
        />
      </div>
      <div className="ml-9">
        <img
          className="h-40 w-96 rounded-xl contrast-200   hover:animate-pulse"
          src={fifty}
          alt=""
        />
      </div>
    </div>
  );
};

export default Add;
