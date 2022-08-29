import React from "react";
import Typical from "react-typical";

const AddToText = () => {
  return (
    <div className="text-black ">
      <h1>
        I am a
        <Typical
          wrapper="p"
          steps={["developer ", 1000, "Designer", 1000, "youTuber", 1000]}
          //   loop={Infinity}
        />
      </h1>
    </div>
  );
};

export default AddToText;
