import React from "react";
import Footer from "../Share/Footer";

const Blogs = () => {
  return (
    <div>
      <section className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mt-4 uppercase text-orange-500">
          Our Blogs
        </h2>
        <div className="mt-4 flex gap-4">
          <div className="card card-compact w-96 bg-base-100 shadow-2xl">
            <figure>
              <img
                className="hover:animate-pulse"
                src="https://i.ibb.co/QXXfprs/laptop.jpg"
                alt="laptop"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">What is MakBook Pro?</h2>
              <p>
                Macbook Air, iPhone, iPad, iMac, Mac Mini, iPod. Buy Refurbished
                MacBook Pro, MacBook Air, Iphone, Ipad, Imac, Mac Mini, Ipod.
                Affordable Prices. BBB Accredited Business. Free Shipping
                Available. Chat Support Available. Multiple Payment Options.
              </p>
              {/* ++++ */}
              <div className="card justify-end">
                <label
                  htmlFor="my-modal-3"
                  className="btn btn-orange-500 modal-button font-bold mt-2"
                >
                  Full Details
                </label>
              </div>
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label
                    htmlFor="my-modal-3"
                    className="btn btn-sm btn-orange-500 btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <h3 className="text-lg font-bold">Laptop</h3>
                  <div className="py-4">
                    <p>
                      {" "}
                      13-inch Macbook Pro 2022 Specs The latest 13-inch Macbook
                      pro was introduced on June 6, 2022. This unit is powered
                      by Apple silicon’s 5nm and 64-bit SoC M2 chip. It has the
                      same old look as its predecessor and the same chassis
                      traced back to 2016. This new unit comes with all the old
                      specs. The upgrades you see in the new MacBook Pro 13” is
                      the new Apple M2 processor that uses Apple’s custom ARM
                      Silicon, the addition of a 24GB memory option, spatial
                      audio, and a 6 watts more powerful adapter. The M2 chip is
                      an 8-core SoC processor with four performance, four
                      efficiency, and 10 core GPU. The unified memory can be
                      configured between 8GB to 24GB, and the storage between
                      256GB to 2TB SSD.
                    </p>
                    <br />
                    <p className="font-bold"> BASE CONFIGURATION </p>
                    <p>
                      * Apple M2 chip with 8‑core CPU, 10‑core GPU, and 16‑core
                      Neural Engine
                    </p>
                    <p>* 8GB unified memory</p>
                    <p>* 256GB SSD storage</p>
                    <p>* 13-inch Retina display with True Tone</p>
                    <p>* Magic Keyboard – US English</p>
                    <p>* Touch Bar and Touch ID</p>
                    <p>* Two Thunderbolt / USB 4 ports</p>
                    <p>* Force Touch trackpad</p>
                  </div>
                </div>
              </div>
              {/* ++++ */}
            </div>
          </div>
          <div className="card card-compact w-96 bg-base-100 shadow-2xl">
            <figure>
              <img
                className="hover:animate-pulse"
                src="https://i.ibb.co/M6ndcpb/Phone-1.png"
                alt="laptop"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">What is iPhone?</h2>
              <p>
                The iPhone is a smartphone made by Apple that combines a
                computer, iPod, digital camera and cellular phone into one
                device with a touchscreen interface. The iPhone runs the iOS
                operating system, and in 2021 when the iPhone 13 was introduced,
                it offered up to 1 TB of storage and a 12-megapixel camera.
              </p>
              {/* ++++ */}
              <div className="card justify-end">
                <label
                  htmlFor="my-modal-3"
                  className="btn btn-orange-500 modal-button font-bold mt-2"
                >
                  Full Details
                </label>
              </div>
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label
                    htmlFor="my-modal-3"
                    className="btn btn-sm btn-orange-500 btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <h3 className="text-lg font-bold">iPhone</h3>
                  <div className="py-4">
                    <p>
                      The iPhone is a line of smartphones designed and marketed
                      by Apple Inc. These devices use Apple's iOS mobile
                      operating system. The first-generation iPhone was
                      announced by then-Apple CEO Steve Jobs on January 9, 2007.
                      Since then, Apple has annually released new iPhone models
                      and iOS updates. As of November 1, 2018, more than 2.2
                      billion iPhones had been sold. The iPhone has a user
                      interface built around a multi-touch screen. It connects
                      to cellular networks or Wi-Fi, and can make calls, browse
                      the web, take pictures, play music and send and receive
                      emails and text messages. Since the iPhone's launch
                      further features have been added, including larger screen
                      sizes, shooting video, waterproofing, the ability to
                      install third-party mobile apps through an app store, and
                      many accessibility features. Up to iPhone 8 and 8 Plus,
                      iPhones used a layout with a single button on the front
                      panel that returns the user to the home screen. Since
                      iPhone X, iPhone models have switched to a nearly
                      bezel-less front screen design with app switching
                      activated by gesture recognition. The older layout today
                      is still used for Apple's currently-produced iPhone SE
                      series. The iPhone is one of the two largest smartphone
                      platforms in the world alongside Android, forming a large
                      part of the luxury market. The iPhone has generated large
                      profits for Apple, making it one of the world's most
                      valuable publicly traded companies. The first-generation
                      iPhone was described as "revolutionary" and a
                      "game-changer" for the mobile phone industry and
                      subsequent models have also garnered praise. The iPhone
                      has been credited with popularizing the smartphone and
                      slate form factor, and with creating a large market for
                      smartphone apps, or "app economy". As of January 2017,
                      Apple's App Store contained more than 2.2 million
                      applications for the iPhone.
                    </p>
                  </div>
                </div>
              </div>
              {/* ++++ */}
            </div>
          </div>
          <div className="card card-compact w-96 bg-base-100 shadow-2xl">
            <figure>
              <img
                className="hover:animate-pulse"
                src="https://i.ibb.co/fY4KRwS/airpot-2.webp"
                alt="laptop"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">What is EarPods?</h2>
              <p>
                EarPods with 3.5 mm Headphone Plug let you answer calls and
                adjust volume and playback of music and video. Buy now with
                fast, free shipping
              </p>
              {/* ++++ */}
              <div className="card justify-end">
                <label
                  htmlFor="my-modal-3"
                  className="btn btn-orange-500 modal-button font-bold mt-2"
                >
                  Full Details
                </label>
              </div>
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label
                    htmlFor="my-modal-3"
                    className="btn btn-sm btn-orange-500 btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <h3 className="text-lg font-bold">Inventory</h3>
                  <div className="py-4">
                    <p>
                      Product Information Overview Unlike traditional, circular
                      earbuds, the design of the EarPods is defined by the
                      geometry of the ear. Which makes them more comfortable for
                      more people than any other earbud-style headphones. The
                      speakers inside the EarPods have been engineered to
                      maximize sound output and minimize sound loss, which means
                      you get high-quality audio. The EarPods also include a
                      built-in remote that lets you adjust the volume, control
                      the playback of music and video, and answer or end calls
                      with a pinch of the cord. Highlights Designed by Apple
                      Deeper, richer bass tones Greater protection from sweat
                      and water Control music and video playback Answer and end
                      calls What’s in the Box EarPods with 3.5 mm Headphone Plug
                      Tech Specs General With Remote and Mic System Requirements
                      Compatibility Information The remote and mic are supported
                      by all models of iPod, iPhone, and iPad (not all models
                      support volume up/down functions). Audio is supported by
                      all iPod models. Requires software version 1.0.3 for iPod
                      nano (4th generation), 2.0.1 for iPod classic (120GB), and
                      2.2 or later for iPod touch (2nd generation).
                    </p>
                  </div>
                </div>
              </div>
              {/* ++++ */}
            </div>
          </div>
        </div>
      </section>

      {/* <div className=" h-full pt-5 bg-gradient-to-r from-purple-400 to-pink-400">
      <div data-aos="fade-up">
        <div class="card w-11/12 bg-base-100 shadow-xl align-center ml-20">
          <div class="card-body">
            <h2 class="card-title">1. General Information</h2>
            <p>
              All orders are subject to product availability. If an item is not
              in stock at the time you place your order, we will notify you and
              refund you the total amount of your order, using the original
              method of payment.{" "}
            </p>
          </div>
        </div>
      </div>
      <div data-aos="fade-up">
        <div class="card w-11/12 bg-base-100 shadow-xl align-center ml-20 mt-2">
          <div class="card-body">
            <h2 class="card-title"> 2. Delivery Location</h2>
            <p>
              Items offered on our website are only available for delivery to
              addresses in [•]. [We also accept orders from international
              customers who are shipping to addresses in [•] only.] Any
              shipments outside of [•] are not available at this time.
            </p>
          </div>
        </div>
      </div>
      <div data-aos="fade-up">
        <div class="card w-11/12 bg-base-100 shadow-xl align-center ml-20 mt-2">
          <div class="card-body">
            <h2 class="card-title">3. Delivery Time</h2>
            <p>
              An estimated delivery time will be provided to you once your order
              is placed. Delivery times are estimates and commence from the date
              of shipping, rather than the date of order. Delivery times are to
              be used as a guide only and are subject to the acceptance and
              approval of your order. Unless there are exceptional
              circumstances, we make every effort to fulfill your order within
              [15] business days of the date of your order. Business day mean
              Monday to Friday, except holidays. Please note we do not ship on
              [Sundays]. Date of delivery may vary due to carrier shipping
              practices, delivery location, method of delivery, and the items
              ordered. Products may also be delivered in separate shipments.
            </p>
          </div>
        </div>
      </div>
      <div data-aos="fade-up">
        <div class="card w-11/12 bg-base-100 shadow-xl align-center ml-20 mt-2">
          <div class="card-body">
            <h2 class="card-title">4. Delivery Instructions</h2>
            <p>
              You can provide special delivery instructions on the check-out
              page of our website.
            </p>
          </div>
        </div>
      </div>
      <div data-aos="fade-up">
        <div class="card w-11/12 bg-base-100 shadow-xl align-center ml-20 mt-2">
          <div class="card-body">
            <h2 class="card-title">5. Shipping Costs</h2>
            <p>
              Shipping costs are based on the weight of your order and the
              delivery method. To find out how much your order will cost, simple
              add the items you would like to purchase to your cart, and proceed
              to the checkout page. Once at the checkout screen, shipping
              charges will be displayed. Additional shipping charges may apply
              to remote areas or for large or heavy items. You will be advised
              of any charges on the checkout page. Sales tax is charged
              according to the province or territory to which the item is
              shipped.
            </p>
          </div>
        </div>
      </div>
      <div data-aos="fade-up">
        <div class="card w-11/12 bg-base-100 shadow-xl align-center ml-20 mt-2">
          <div class="card-body">
            <h2 class="card-title">6. Damaged Items in Transport </h2>
            <p>
              If there is any damage to the packaging on delivery, contact us
              immediately at
            </p>
          </div>
        </div>
      </div>
      <div data-aos="fade-up">
        <div class="card w-11/12 bg-base-100 shadow-xl align-center ml-20 mt-2">
          <div class="card-body">
            <h2 class="card-title">7. Questions</h2>
            <p>
              If you have any questions about the delivery and shipment or your
              order, please contact us at
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div> */}
      <Footer />
    </div>
  );
};

export default Blogs;
