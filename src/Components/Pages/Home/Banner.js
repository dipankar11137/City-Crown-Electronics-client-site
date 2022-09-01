import React from "react";
import "../../CSS/Banner.css";
import airpot from "../../Images/Banner/airpot-1.jpg";
import laptop from "../../Images/Banner/laptop.jpg";
import iPad from "../../Images/Banner/ipad-1.jpg";
import "../../CSS/PicStyle.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    pauseOnHover: true,
    fade: true,
  };
  return (
    <Slider {...settings}>
      <div div className="relative h-scren w-screen ">
        <img className="object-fill sliderImg w-screen" src={laptop} alt="" />
        <div className="absolute1 flex flex-col  justify-start">
          <div>
            <p className="heroP text-lime-200 ">
              {" "}
              City<span className="text-orange-300">
                Crown
              </span> Electronics{" "}
            </p>
          </div>
          <div>
            <h1 className="heroHead text-start ">MackBook Pro</h1>
          </div>
          <div>
            <p className="heroP text-white pb-4 ">
              {" "}
              Apple Product dolor amet consectetur <br />
              adipisicing Nobis, excepturi.{" "}
            </p>
          </div>

          <div className=" flex justify-start">
            <Link
              to="/showAllProducts"
              className=" btn bg-orange-600 text-italic font-bold"
            >
              Buy now
            </Link>
          </div>
        </div>
      </div>
      <div div className="relative h-scren w-screen ">
        <img className="object-fill sliderImg w-screen" src={airpot} alt="" />
        <div className="absolute1 flex flex-col  justify-start">
          <div className="mt-36">
            <p className="heroP text-lime-500 ">
              {" "}
              City<span className="text-orange-500">
                Crown
              </span> Electronics{" "}
            </p>
          </div>
          <div>
            <h1 className="heroHead text-start ">EarPot V4</h1>
          </div>
          <div>
            <p className="heroP text-white pb-4 ">
              {" "}
              Apple Product dolor amet consectetur <br />
              adipisicing Nobis, excepturi.{" "}
            </p>
          </div>

          <div className=" flex justify-start">
            <Link
              to="/showAllProducts"
              className=" btn bg-orange-600 text-italic font-bold"
            >
              Buy now
            </Link>
          </div>
        </div>
      </div>
      <div div className="relative h-scren w-screen ">
        <img className="object-fill sliderImg w-screen" src={iPad} alt="" />
        <div className="absolute1 flex flex-col  justify-start">
          <div>
            <p className="heroP text-lime-500 ">
              {" "}
              City<span className="text-orange-500">
                Crown
              </span> Electronics{" "}
            </p>
          </div>
          <div>
            <h1 className="heroHead text-start ">iPad Pro</h1>
          </div>
          <div>
            <p className="heroP text-white pb-4 ">
              {" "}
              Apple Product dolor amet consectetur <br />
              adipisicing Nobis, excepturi.{" "}
            </p>
          </div>

          <div className=" flex justify-start">
            <Link
              to="/showAllProducts"
              className=" btn bg-orange-600 text-italic font-bold"
            >
              Buy now
            </Link>
          </div>
        </div>
      </div>
    </Slider>

    // <div className=" ">
    //   {/* <div>
    //     <div
    //       class="hero min-h-screen pb-20 opacity-80 "
    //       style={{
    //         background: `url(${apple})`,
    //         backgroundSize: "cover",
    //         backgroundRepeat: "no-repeat",
    //         height: "300px",
    //       }}
    //     >
    //       <div class="hero-content flex-col lg:flex-row-reverse transbox">
    //         <div>
    //           {" "}
    //           <img
    //             class="lg:max-w-sm rounded-xl shadow-2xl pic-style"
    //             src={laptop}
    //             alt=""
    //           />
    //           <img
    //             class="lg:max-w-sm rounded-2xl shadow-2xl pt-5 pic-style"
    //             src={phone}
    //             alt=""
    //           />
    //         </div>

    //         <div>
    //           <div>
    //             <h1 class="text-5xl font-bold  text-lime-500">
    //               City<span className="text-orange-500">Crow</span>n
    //               <span className="text-lime-500"> Electronics</span>
    //             </h1>
    //           </div>
    //           <div>
    //             <p class="py-6 lg:visible sm:invisible ">
    //               <span className="text-orange-500">CityCrown Electronics</span>{" "}
    //               is an Bangladeshi multinational technology company that
    //               specializes in consumer
    //               <span className="text-black"> electronics,</span>
    //               software and online ser vices headquartered in Cupertino,
    //               California, United States.
    //             </p>
    //           </div>
    //           <div>
    //             <button class="btn btn-orange-500 text-white lg:visible sm:invisible">
    //               Get Started
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div> */}

    //   {/* <div class="carousel">
    //     <div id="slide1" class="carousel-item  h-5/6">
    //       <img src={airpot} class="w-full  " alt="" />
    //       <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //         <a href="#slide4" class="btn btn-circle">
    //           ❮
    //         </a>
    //         <a href="#slide2" class="btn btn-circle">
    //           ❯
    //         </a>
    //       </div>
    //     </div>
    //     <div id="slide2" class="carousel-item  h-5/6">
    //       <img src={laptop} class="w-full  " alt="" />
    //       <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //         <a href="#slide4" class="btn btn-circle">
    //           ❮
    //         </a>
    //         <a href="#slide2" class="btn btn-circle">
    //           ❯
    //         </a>
    //       </div>
    //     </div>
    //     <div id="slide2" class="carousel-item  h-5/6">
    //       <img src={watch} class="w-full  " alt="" />
    //       <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //         <a href="#slide4" class="btn btn-circle">
    //           ❮
    //         </a>
    //         <a href="#slide2" class="btn btn-circle">
    //           ❯
    //         </a>
    //       </div>
    //     </div>
    //   </div> */}

    //   {/* <div className="py-5 px-10 ">
    //     <div class="carousel carousel-center rounded-box">
    //       <div class="carousel-item">
    //         <img
    //           className="max-h-96 "
    //           src="https://i.ibb.co/GvkV6h9/monitor-1.jpg"
    //           alt="Pizza"
    //         />
    //       </div>
    //       <div class="carousel-item">
    //         <img
    //           className="max-h-96"
    //           src="https://i.ibb.co/CtnLknK/laptop1.jpg"
    //           alt="Pizza"
    //         />
    //       </div>
    //       <div class="carousel-item">
    //         <img
    //           className="max-h-96"
    //           src="https://i.ibb.co/s9gY71s/watch-1.jpg"
    //           alt="Pizza"
    //         />
    //       </div>
    //       <div class="carousel-item">
    //         <img
    //           className="max-h-96"
    //           src="https://i.ibb.co/QvHs2LM/ipad-1.jpg"
    //           alt="Pizza"
    //         />
    //       </div>
    //       <div class="carousel-item">
    //         <img
    //           className="max-h-96"
    //           src="https://i.ibb.co/CJVYS06/speaker-1.webp"
    //           alt="Pizza"
    //         />
    //       </div>
    //       <div class="carousel-item">
    //         <img
    //           className="max-h-96"
    //           src="https://i.ibb.co/QvHs2LM/ipad-1.jpg"
    //           alt="Pizza"
    //         />
    //       </div>
    //       <div class="carousel-item">
    //         <img
    //           className="max-h-96"
    //           src="https://i.ibb.co/CJVYS06/speaker-1.webp"
    //           alt="Pizza"
    //         />
    //       </div>
    //       <div class="carousel-item">
    //         <img
    //           className="max-h-96"
    //           src="https://i.ibb.co/QvHs2LM/ipad-1.jpg"
    //           alt="Pizza"
    //         />
    //       </div>
    //     </div>
    //   </div> */}
    // </div>
  );
};

export default Banner;
