import React from "react";

const Banner = () => {
  return (
    <div className="sm:w-full lg:w-10/12">
      <div className="py-5 px-10 ">
        <div class="carousel carousel-center rounded-box">
          <div class="carousel-item">
            <img
              className="h-64 "
              src="https://i.ibb.co/3dpzWP6/ele-4.jpg"
              alt="Pizza"
            />
          </div>
          <div class="carousel-item">
            <img
              className="h-64"
              src="https://i.ibb.co/xGjWRjj/ele-1.jpg"
              alt="Pizza"
            />
          </div>
          <div class="carousel-item">
            <img
              className="h-64"
              src="https://i.ibb.co/C6SwnVc/ele-2.jpg"
              alt="Pizza"
            />
          </div>
          <div class="carousel-item">
            <img
              className="h-64"
              src="https://i.ibb.co/xGjWRjj/ele-1.jpg"
              alt="Pizza"
            />
          </div>
          <div class="carousel-item">
            <img
              className="h-64"
              src="https://i.ibb.co/C6SwnVc/ele-2.jpg"
              alt="Pizza"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
