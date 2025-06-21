import React from "react";
import { useContext } from "react";
import {Link} from "react-router-dom";
import { ApiCreatContext } from "../../Context/MainContextProvider";

const DashBord = () => {
    const {user} = useContext(ApiCreatContext)
  return (
    <div className="dropdown dropdown-end">
            <div 
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
               {
                user? <img src={user?.photoURL} alt="" srcset="" />  :  <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
               }
              </div>
            </div>
             <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <Link to='/profile' className="justify-between">
              Profile
              <span className="badge">New</span>
            </Link>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
          </div>
  );
};

export default DashBord;
