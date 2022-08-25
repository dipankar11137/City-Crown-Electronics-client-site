import React from "react";
import fifty from "../../Images/Add/fifty.jpg";
import speacialOffer from "../../Images/Add/speacial offer.jpg";

const Add = () => {
  return (
    <div className="flex mt-5 lg:ml-20 ">
      <div className="shadow-yellow-400 ">
        <img
          className="h-40 rounded contrast-200 scale-75 rotate-45 hover:translate-y-1 hover:skew-y-2 animate-pulse hover:animate-ping"
          src={speacialOffer}
          alt=""
        />
      </div>
      <div className="ml-6 mt-10">
        <img
          className="h-60 rounded-xl contrast-200   animate-bounce hover:animate-pulse"
          src={fifty}
          alt=""
        />
      </div>
    </div>
  );
};

export default Add;
