import React from "react";
import Footer from "../Share/Footer";

const Blogs = () => {
  return (
    <div className="bg-slate-200 h-full pt-5">
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
    </div>
  );
};

export default Blogs;
