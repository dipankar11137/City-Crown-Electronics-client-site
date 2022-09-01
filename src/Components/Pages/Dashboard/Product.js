import React from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";

const Product = ({ product, handleDelete, handleDetails }) => {
  const { _id, img, name, price, description, supplierName, date, quantity } =
    product;

  return (
    <tbody>
      <tr className="text-center">
        <td className="">
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-hexagon w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">{name}</div>
              <div class="text-sm opacity-50">{description}</div>
            </div>
          </div>
        </td>

        <td className="bg-indigo-200">{price} BDT</td>
        <td className="bg-orange-100">{quantity}</td>
        <td className="bg-lime-100">{supplierName}</td>
        <td className="bg-rose-100">{date}</td>
        <td className="bg-sky-100">
          <Link to="/">
            {" "}
            <button
              onClick={() => handleDetails(_id)}
              className="btn btn-sm btn-lime-500 hover:btn-warning text-white"
            >
              <FaInfo />
            </button>
          </Link>
        </td>
        <th className="bg-fuchsia-200">
          <button
            onClick={() => handleDelete(_id)}
            class="btn btn-sm btn-lime-500 hover:btn-warning text-white"
          >
            <FaTrash />{" "}
          </button>
        </th>
      </tr>
      <hr />
    </tbody>
  );
};

export default Product;
