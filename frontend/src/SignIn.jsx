import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="flex justify-center items-center mt-4">
      <div className="bg-white pt-10 pl-10 w-[400px] h-[570px] rounded">
        <Link to="/">
          <p className="text-black">MovieBuzz</p>
        </Link>
        <p className="text-blue-400 text-4xl mt-7">Hello,</p>
        <p className="text-blue-700 text-4xl font-bold">Welcome!</p>

        <form className="mt-7">
          <input
            type="email"
            placeholder="Email"
            className="bg-gray-800 border-b-2 pl-2 border-red-400 w-[320px] h-10 rounded outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-gray-800 border-b-2 pl-2 border-red-400 w-[320px] h-10 rounded mt-5 outline-none"
          />
          <div className="flex justify-center">
            <button className="bg-blue-500 text-white w-[200px] h-12 mt-5 ml-[-40px] hover:scale-105 font-bold">
              Sign In
            </button>
          </div>
          <p className="text-blue-600 text-end pr-10 pt-4 cursor-pointer ">
            Forgot Password?
          </p>
        </form>
        <div className="mr-10 mt-3">
          <div className="flex items-center gap-5 justify-center">
            <div className="h-2 w-[30%] bg-red-400 rounded-full"></div>
            <p className="text-center text-black">Or</p>
            <div className="h-2 w-[30%] bg-red-400 rounded-full"></div>
          </div>
          <div className="flex justify-center mt-5 ml-3">
            <div className="bg-blue-800 w-10 h-10 rounded-full flex justify-center items-center mr-4 cursor-pointer hover:scale-105">
              <i className="fab fa-facebook-f text-white"></i>
            </div>
            <div className="bg-red-800 w-10 h-10 rounded-full flex justify-center items-center mr-4 cursor-pointer hover:scale-105">
              <i className="fab fa-google text-white"></i>
            </div>
            <div className="bg-blue-400 w-10 h-10 rounded-full flex justify-center items-center mr-4 cursor-pointer hover:scale-105">
              <i className="fab fa-twitter text-white"></i>
            </div>
          </div>
        </div>
        <p className="text-center mt-5 text-black pr-10">
          Don't have an account?{" "}
          <span className="text-blue-600 cursor-pointer">Sign Up</span> here
          now!
        </p>
      </div>
    </div>
  );
};

export default SignIn;
