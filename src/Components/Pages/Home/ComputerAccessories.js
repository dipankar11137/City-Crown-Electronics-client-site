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
    <div className="bg-zinc-200 text-black lg:mx-28 rounded-lg">
      <h1 className="text-lime-700 text-center text-5xl font-bold my-5 p-3">
        Computer <span className="text-neutral">Accessor</span>
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 lg:ml-6 p-3">
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
