import React from "react";

const SideNav = () => {
  return (
    <div className="w-1/5">
      <p className="border-b-2 pb-2">Navigation</p>
      <div className="mt-2 space-y-6">
        <p>Movie List</p>
        <p>TV List</p>
        <p>Series</p>
        <p>Watchlist</p>
        <p>Watched</p>
        <p>Favourite</p>
      </div>
    </div>
  );
};

export default SideNav;
