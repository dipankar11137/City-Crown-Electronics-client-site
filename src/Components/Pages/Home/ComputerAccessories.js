import React, { useEffect, useState } from "react";
import ComputerAccessor from "./ComputerAccessor";

const ComputerAccessories = () => {
  const [computerAccessors, setComputerAccessor] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setComputerAccessor(data));
  }, []);
  return (
    <div className="bg-gray-300 text-black lg:mx-28 rounded-lg">
      <h1 className="text-2xl font-bold p-3">Computer Accessor</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 lg:ml-6 p-2">
        {computerAccessors.slice(0, 11).map((computerAccessor) => (
          <ComputerAccessor
            key={computerAccessor._id}
            computerAccessor={computerAccessor}
          ></ComputerAccessor>
        ))}
      </div>
    </div>
  );
};

export default ComputerAccessories;
