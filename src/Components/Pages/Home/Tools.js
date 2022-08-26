import React, { useEffect, useState } from "react";
import Tool from "./Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <div className="sm:mb-2 sm:p-0 lg:mb-6 lg:p-6  bg-stone-200 mx-8 rounded-lg my-6">
      <div class="lg:text-5xl  text-center font-extrabold mb-5">
        <span class="bg-clip-text  text-transparent bg-gradient-to-r from-pink-900 to-violet-900 uppercase">
          Mobile Phone Accessories
        </span>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-5 sm:gap-0 lg:gap-4 ">
        {tools.map((tool) => (
          <Tool key={tool._id} tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
