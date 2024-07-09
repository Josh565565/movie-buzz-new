import React, { useState, useEffect } from "react";
import Nav from "./components/home/Nav";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Spider from "./assets/spider.webp";
import Panda from "./assets/panda.jpg";

const MovieDetails = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgrounds = [Spider, Panda];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <>
      <Nav />

      <div className="">
        <div
          className="bg-cover bg-no-repeat w-full h-[550px] object-fill relative"
          style={{ backgroundImage: `url(${backgrounds[backgroundIndex]})` }}
        >
          <AiOutlineArrowLeft
            className="cursor-pointer text-white ml-5 absolute top-5"
            size={30}
          />

          {/* Opacity effect */}
          <div className="absolute bottom-0 w-full h-[150px]">
            <div className="h-full bg-gradient-to-b from-transparent to-black">
              <div className="pl-5">
                <div>
                 <p className="text-7xl text-gray-200">Spider Man</p>
                 <div className="flex gap-5 mt-7 items-center ">
                    <p>Genres</p>
                    <p className="border border-blue-400 px-3 h-7 flex justify-center rounded-full">Action</p>
                    <p className="border border-blue-400 px-3 h-7 flex justify-center rounded-full">Action</p>
                    <p className="border border-blue-400 px-3 h-7 flex justify-center rounded-full">Science Fiction</p>
                 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>Cash</p>
      </div>
    </>
  );
};

export default MovieDetails;
