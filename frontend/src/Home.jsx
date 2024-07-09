import React from "react";
import Nav from "./components/home/Nav";
import SideNav from "./components/home/SideNav";
import Main from "./components/home/Main";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="p-6 text-lg">
        <p className="pb-8">Welcome Josh, to Your Personal Movie Tracker!</p>
        <div className="flex gap-3">
          <SideNav />
          <Main />
        </div>
      </div>
    </>
  );
};

export default Home;
