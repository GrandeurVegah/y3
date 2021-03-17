import React from "react";
import { Link } from "react-router-dom";
export default function dropdown({ isOpen, toggle }) {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center items-center bg-yellow-500"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link to="/" className="p-4">
        Home
      </Link>
      <Link to="/Search" className="p-4">
        Search
      </Link>
      <Link to="/Porfolio" className="p-4">
        Portfolio
      </Link>
    </div>
  );
}
