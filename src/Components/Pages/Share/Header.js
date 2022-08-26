import React from "react";

const Header = () => {
  return (
    <div className="bg-slate-900 text-white py-2 px-6">
      <div className="flex justify-between">
        <div className="h-full items-center">
          <h1 className=" sm: text-2xl lg:text-3xl font-bold text-lime-400 ">
            City
            <span className="text-orange-500 hover:text-lime-400">
              Crow
            </span>n{" "}
            <span className="font-extrabold hover:text-orange-500">Electr</span>
            onics
          </h1>
        </div>
        <div>
          <label tabindex="0" class="btn btn-ghost btn-circle mr-3">
            <div class="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span class="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <button class="btn bg-lime-400 text-black hover:text-white font-bold">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
