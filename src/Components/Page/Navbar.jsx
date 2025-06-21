import React, { useContext, useEffect, useState } from "react";
import { data, Link, NavLink } from "react-router-dom";
import { ApiCreatContext } from "../../Context/MainContextProvider";
import DashBord from "./DashBord";

const Navbar = () => {
  const { logouts, user } = useContext(ApiCreatContext);
  const [iteam, setIteam] = useState([]);
  console.log(iteam);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
      .then((res) => res.json())
      .then((data) => setIteam(data.categories));
  }, []);

  return (
    <div>
      {/* {iteam.map((tem) => (
        <button className="btn" key={tem.category_id}>
          {tem.category}
        </button>
      ))} */}

      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm flex flex-col gap-4 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {iteam.map((tem) => (
                <NavLink
                  to={`/tem/${tem.category_id}`}
                  className="btn btn-primary"
                  key={tem.category_id}
                >
                  {tem.category}
                </NavLink>
              ))}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">The KB Show</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal flex gap-4 px-1">
            {iteam.map((tem) => (
              <NavLink
                to={`/tem/${tem.category_id}`}
                className="btn btn-primary bg-black text-white "
                key={tem.category_id}
              >
                {tem.category}
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="navbar-end flex gap-2">
          {user ? (
            <div >
              <NavLink
                className="bg-gray-700 px-3 py-2 rounded-sm"
                onClick={logouts}
              >
                Logout
              </NavLink>
              <p className="mt-2 font-medium">{user.displayName}</p>
            </div>
          ) : (
            <NavLink className="bg-gray-700 px-3 py-2 rounded-sm" to="/Login">
              Login
            </NavLink>
          )}

          {user && (
              <DashBord></DashBord>
           
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
