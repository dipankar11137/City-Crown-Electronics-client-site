import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import MyItem from "./MyItem";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const myItems = async () => {
      const email = user.email;
      const url = `https://stark-spire-19455.herokuapp.com/appleProductsItem?email=${email}`;
      const { data } = await axios.get(url);
      setItems(data);
    };
    myItems();
  }, [user]);
  return (
    <div className="bg-slate-300 h-screen">
      <h1 className="text-center text-orange-500 font-bold text-5xl p-4">
        {" "}
        <samp className="text-lime-600">My</samp> Items{" "}
      </h1>
      <div className="px-56">
        {items.map((item) => (
          <MyItem key={item._id} item={item}></MyItem>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
