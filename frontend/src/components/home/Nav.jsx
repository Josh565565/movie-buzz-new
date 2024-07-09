import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="h-16 border-b-2">
      <nav className="flex h-full items-center px-6 justify-between">
        <div>
          <p className="text-2xl text-red-400">Movie Buzz</p>
        </div>
        <div className="flex gap-5 items-center">
          <div className="mr-10">
            <input
              type="search"
              className="bg-white text-black rounded-md pl-2 h-8"
              placeholder="Search"
            />
          </div>
          <p className="bg-red-500 font-bold w-28 h-8 rounded-full flex items-center justify-center cursor-pointer hover:scale-105">
            <Link to="/register">Get Started</Link>
          </p>
          <p className=" border border-red-500 font-bold w-20 h-8 rounded-full flex items-center justify-center cursor-pointer hover:scale-105">
            <Link to="/signin">LogIn</Link>
          </p>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
