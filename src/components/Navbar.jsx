import React, { use } from "react";
import { Link, NavLink } from "react-router";
import logoImg from "/logo.png";
import { CiSearch } from "react-icons/ci";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user } = use(AuthContext);
  const links = (
    <>
      <NavLink className={"mr-5 px-1.5 rounded-md text-secondary"} to={"/home"}>
        Home
      </NavLink>
      <NavLink
        className={"mr-5 px-1.5 rounded-md  text-secondary"}
        to={"/destination"}
      >
        Destination
      </NavLink>
      <NavLink
        className={"mr-5 px-1.5 rounded-md  text-secondary"}
        to={"/blogs"}
      >
        Blogs
      </NavLink>
      <NavLink className={"px-1.5 rounded-md  text-secondary"} to={"/contact"}>
        Contact
      </NavLink>
    </>
  );

  return (
    <div className="navbar">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="bg-white/80 p-1 rounded">
          <img className="w-16" src={logoImg} alt="logo" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <label className="text-white flex mr-5 text-xs px-3 py-1 rounded-md gap-2">
          <CiSearch />
          <input type="search" placeholder="Search your destination" />
        </label>
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to={"/login"} className="btn btn-primary text-black">
          {user ? "Logout" : "Login"}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
