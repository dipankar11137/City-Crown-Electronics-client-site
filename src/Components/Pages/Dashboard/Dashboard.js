import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="bg-slate-100">
      <div>
        <div class="drawer drawer-mobile">
          <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content ">
            <h2 className="text-4xl bg-slate-900 text-lime-400 font-bold text-center mb-3 uppercase p-1">
              Welcome <span className="text-orange-600">to My</span> DashBoard
            </h2>
            <Outlet></Outlet>
          </div>
          <div class="drawer-side ml-4">
            <label for="dashboard-sidebar" class="drawer-overlay"></label>
            <ul class="menu p-4 overflow-y-auto w-44 bg-base-100 text-base-content">
              <li>
                <Link
                  to="/dashboard"
                  className="font-bold hover:text-orange-600"
                >
                  Add Item
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/manageItem"
                  className="font-bold hover:text-orange-600"
                >
                  Manage Item
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
