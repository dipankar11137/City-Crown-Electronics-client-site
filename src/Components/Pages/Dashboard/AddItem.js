import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddItem = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    const url = `http://localhost:5000/appleProducts`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Successfully Add This Products");
        reset();
      });
  };
  return (
    <div className=" pb-20">
      <h2 className="mt-5 ml-10 font-bold text-4xl">Please add a Product</h2>
      <div className="bg-red-100 p-5 rounded-2xl w-11/12 mt-5 ml-5 ">
        <form
          className=" flex justify-center gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Product name"
              className="input input-bordered bg-white lg:w-96 sm:w-full max-w-xs"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors?.name?.message}
                </span>
              )}
            </label>
            <label className="label">
              <span className="label-text">Images</span>
            </label>
            <input
              type="text"
              placeholder="Images 1 URL"
              className="input input-bordered bg-white w-full max-w-xs"
              {...register("img", {
                required: {
                  value: true,
                  message: "Images is Required",
                },
              })}
            />
            <input
              type="text"
              placeholder="Images 2 URL"
              className="input input-bordered bg-white w-full mt-2 max-w-xs"
              {...register("img2", {
                required: {
                  value: true,
                  message: "Images is Required",
                },
              })}
            />
            <input
              type="text"
              placeholder="Images 3 URL"
              className="input input-bordered bg-white w-full mt-2 max-w-xs"
              {...register("img3", {
                required: {
                  value: true,
                  message: "Images is Required",
                },
              })}
            />
            <label className="label">
              {errors.img?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors?.img?.message}
                </span>
              )}
            </label>

            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              placeholder="Description"
              className="input input-bordered bg-white w-full max-w-xs"
              {...register("description", {
                required: {
                  value: true,
                  message: "Description is Required",
                },
              })}
            />
            <label className="label">
              {errors.description?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors?.description?.message}
                </span>
              )}
            </label>
            {/* Price */}
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              className="input input-bordered bg-white w-full max-w-xs"
              {...register("price", {
                required: {
                  value: true,
                  message: "Price is Required",
                },
              })}
            />
            <label className="label">
              {errors.price?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors?.price?.message}
                </span>
              )}
            </label>
          </div>

          <div>
            {/* Add Quantity */}
            <label className="label">
              <span className="label-text">Add Quantity</span>
            </label>
            <input
              type="number"
              placeholder="Input Positive Number"
              className="input input-bordered  bg-white lg:w-96 sm:w-full max-w-xs"
              {...register("quantity", {
                required: {
                  value: true,
                  message: "Min Order Quantity is Required",
                },
              })}
            />
            <label className="label">
              {errors.quantity?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors?.quantity?.message}
                </span>
              )}
            </label>
            {/* status */}
            <label className="label">
              <span className="label-text">Product Status</span>
            </label>
            <input
              type="text"
              placeholder="Product Status "
              className="input input-bordered bg-white w-full max-w-xs"
              {...register("status", {
                required: {
                  value: true,
                  message: "Available Quantity is Required",
                },
              })}
            />
            <label className="label">
              {errors.status?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors?.status?.message}
                </span>
              )}
            </label>
            {/* supplierName */}
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <input
              type="text"
              placeholder="Supplier Name"
              className="input input-bordered bg-white w-full max-w-xs"
              {...register("supplierName", {
                required: {
                  value: true,
                  message: "Available Quantity is Required",
                },
              })}
            />
            <label className="label">
              {errors.supplierName?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors?.supplierName?.message}
                </span>
              )}
            </label>
            {/* Date */}
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              placeholder="Date "
              className="input input-bordered bg-white w-full max-w-xs"
              {...register("date", {
                required: {
                  value: true,
                  message: "Available Quantity is Required",
                },
              })}
            />
            <label className="label">
              {errors.date?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors?.date?.message}
                </span>
              )}
            </label>

            <input
              className="btn  w-full text-white"
              type="submit"
              value="ADD"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;