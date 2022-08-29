import React from "react";
import airpot from "../../Images/Banner/airpot-1.jpg";
import laptop from "../../Images/Banner/laptop.jpg";
import watch from "../../Images/Banner/watch -3.jpg";
import phone from "../../Images/Banner/Phone-1.png";
import apple from "../../Images/Banner/apple.jpg";
import "../../CSS/PicStyle.css";

const Banner = () => {
  return (
    <div className=" ">
      <div>
        <div
          class="hero min-h-screen pb-20 "
          style={{
            background: `url(${apple})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "300px",
          }}
        >
          <div class="hero-content flex-col lg:flex-row-reverse transbox">
            <div>
              {" "}
              <img
                class="lg:max-w-sm rounded-xl shadow-2xl pic-style"
                src={laptop}
                alt=""
              />
              <img
                class="lg:max-w-sm rounded-2xl shadow-2xl pt-5 pic-style"
                src={phone}
                alt=""
              />
            </div>

            <div>
              <div>
                <h1 class="text-5xl font-bold text-lime-500">
                  City<span className="text-orange-500">Crow</span>n
                  <span className="text-lime-500"> Electronics</span>
                </h1>
              </div>
              <div>
                <p class="py-6 lg:visible sm:invisible ">
                  <span className="text-orange-500">CityCrown Electronics</span>{" "}
                  is an Bangladeshi multinational technology company that
                  specializes in consumer
                  <span className="text-black"> electronics,</span>
                  software and online ser vices headquartered in Cupertino,
                  California, United States.
                </p>
              </div>
              <div>
                <button class="btn btn-orange-500 text-white lg:visible sm:invisible">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="carousel">
        <div id="slide1" class="carousel-item  h-5/6">
          <img src={airpot} class="w-full  " alt="" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" class="carousel-item  h-5/6">
          <img src={laptop} class="w-full  " alt="" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" class="carousel-item  h-5/6">
          <img src={watch} class="w-full  " alt="" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div> */}

      {/* <div className="py-5 px-10 ">
        <div class="carousel carousel-center rounded-box">
          <div class="carousel-item">
            <img
              className="max-h-96 "
              src="https://i.ibb.co/GvkV6h9/monitor-1.jpg"
              alt="Pizza"
            />
          </div>
          <div class="carousel-item">
            <img
              className="max-h-96"
              src="https://i.ibb.co/CtnLknK/laptop1.jpg"
              alt="Pizza"
            />
          </div>
          <div class="carousel-item">
            <img
              className="max-h-96"
              src="https://i.ibb.co/s9gY71s/watch-1.jpg"
              alt="Pizza"
            />
          </div>
          <div class="carousel-item">
            <img
              className="max-h-96"
              src="https://i.ibb.co/QvHs2LM/ipad-1.jpg"
              alt="Pizza"
            />
          </div>
          <div class="carousel-item">
            <img
              className="max-h-96"
              src="https://i.ibb.co/CJVYS06/speaker-1.webp"
              alt="Pizza"
            />
          </div>
          <div class="carousel-item">
            <img
              className="max-h-96"
              src="https://i.ibb.co/QvHs2LM/ipad-1.jpg"
              alt="Pizza"
            />
          </div>
          <div class="carousel-item">
            <img
              className="max-h-96"
              src="https://i.ibb.co/CJVYS06/speaker-1.webp"
              alt="Pizza"
            />
          </div>
          <div class="carousel-item">
            <img
              className="max-h-96"
              src="https://i.ibb.co/QvHs2LM/ipad-1.jpg"
              alt="Pizza"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
