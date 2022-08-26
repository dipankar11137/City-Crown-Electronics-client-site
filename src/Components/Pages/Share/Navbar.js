import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../Images/Logo/ce-removebg-preview.png";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  const manuItem = (
    <>
      <li className="font-bold">
        <Link to="/about">About</Link>
      </li>
      <li className="font-bold">
        <Link to="/blogs">Blogs</Link>
      </li>
      <li className="font-bold">
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <div class="navbar bg-slate-800 text-white  ">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {manuItem}
          </ul>
        </div>
        <Link to="/">
          <a className="btn btn-ghost normal-case text-xl ">
            <img className="w-20 rounded-2xl " src={logo} alt="" />
          </a>
        </Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">{manuItem}</ul>
      </div>
      <div class="navbar-end pr-10">
        <ul>
          <li className=" font-bold">
            {user ? (
              <button className=" font-bold" onClick={logout}>
                Sign Out
              </button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
