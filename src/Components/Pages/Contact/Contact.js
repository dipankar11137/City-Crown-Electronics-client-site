import React from "react";

const Contact = () => {
  return (
    <div className="py-16 lg:px-16 bg-slate-50">
      <h2 className="text-orange-500 text-center text-3xl font-bold">
        Contact Us
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:justify-items-center items-center lg:gap-3 border-2 bg-slate-300 p-5">
        <div className="lg:max-w-lg mt-5">
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="text-center input input-bordered w-full"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Company</span>
                </label>
                <input
                  type="text"
                  placeholder="Company"
                  className="text-center input input-bordered w-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="text-center input input-bordered w-full"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  placeholder="Phone"
                  className="text-center input input-bordered w-full"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                type="text"
                placeholder="How can I help you ?"
                className="text-center textarea textarea-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-orange-600 text-white">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
