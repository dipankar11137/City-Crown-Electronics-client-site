import React from "react";
import img from "../../Images/Banner/apple.jpg";

const About = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row gap-8">
          <img src={img} class="w-24 md:w-32 lg:w-3/5 rounded-lg " alt="" />
          <div className="ms-32">
            <h1 class="text-5xl font-bold text-rose-800 ">About Us</h1>
            <p class="py-6">
              Apple Inc., formerly Apple Computer, Inc., is a multinational
              corporation that creates consumer electronics, personal computers,
              servers, and computer software, and is a digital distributor of
              media content. The company also has a chain of retail stores known
              as Apple Stores. Apple's core product lines are the iPhone
              smartphone, iPad tablet computer, and Macintosh computer line.
              Founders Steve Jobs, Steve Wozniak, and Ronald Wayne created Apple
              Computer Co. on April 1, 1976, to market Wozniak's Apple I desktop
              computer,[1] and Jobs and Wozniak incorporated the company on
              January 3, 1977,[2] in Cupertino, California. For more than three
              decades, Apple Computer was predominantly a manufacturer of
              personal computers, including the Apple II, Macintosh, and Power
              Mac lines, but it faced rocky sales and low market share during
              the 1990s. Jobs, who had been ousted from the company in 1985,
              returned to Apple in 1997 after his company NeXT was bought by
              Apple.[3] The following year he became the company's interim
              CEO,[4] which later became permanent.[5] Jobs subsequently
              instilled a new corporate philosophy of recognizable products and
              simple design, starting with the original iMac in 1998
            </p>
            <button data-theme="autumn" class="btn btn-orange-500">
              See More
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default About;
