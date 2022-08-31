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
    <div>
      <h1> My Items </h1>
      <div className="px-20">
        {items.map((item) => (
          <MyItem key={item._id} item={item}></MyItem>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
