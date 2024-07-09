import React from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import spiderMan from "../../assets/kung-fu-panda-4.jpg";
import { Link } from "react-router-dom";

const MovieCard = () => {
  // Sample data (Replace with actual data)
  const movie = {
    title: "Spider-Man: No Way Home",
    category: "Action, Adventure, Sci-Fi",
    rating: 2, // Out of 10
    isFavorite: true, // Initial favorite state
  };

  const toggleFavorite = () => {
    // Update isFavorite state in your data
    movie.isFavorite = !movie.isFavorite;
  };

  // Calculate filled stars based on rating
  const filledStars = Math.round(movie.rating);

  return (
    <div className="w-[188px] overflow-hidden rounded-t-lg shadow-md">
      <div className=" shadow-md relative">
        {/* <div className="w-[200px] h-40"> */}
        <Link to="details">
          <img
            src={spiderMan}
            alt="Movie Poster"
            className="w-full object-cover"
          />
          </Link>
        {/* </div> */}

        <div className="absolute top-2 right-2">
          <button
            onClick={toggleFavorite}
            className="p-1 rounded-full focus:outline-none"
          >
            {movie.isFavorite ? (
              <AiFillHeart className="text-red-500" size={20} />
            ) : (
              <AiOutlineHeart className="text-gray-400" size={20} />
            )}
          </button>
        </div>
      </div>

      <div className="p-2 bg-black rounded-b-lg">
        <h2 className="text-sm font-bold">{movie.title}</h2>
        <p className="text-gray-600 text-xs mt-1">{movie.category}</p>
        <div className="flex items-center gap-1">
        <div className="flex items-center text-base mt-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-500">
              {i < filledStars ? <AiFillStar /> : <AiOutlineStar />}
            </span>
          ))}
        </div>
        <div>
          <p className="text-xs mt-2">Status: <span className="text-red-300">Watching</span></p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
