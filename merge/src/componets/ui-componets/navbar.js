import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../index";
export default function NavBar({ toggle }) {
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login();
      history.push("/Search");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }
  return (
    <nav
      className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono"
      role="navigation"
    >
      <Link to="/" className="pl-8">
        Merge
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block  hidden">
        <Link to="/" className="p-4">
          Home
        </Link>
        <Link to="/Search" className="p-4">
          Search
        </Link>
        <Link to="/Portfolio" className="p-4">
          Porfolio
        </Link>
        <Link to="/" className="p-4">
          {error && alert({ error })}
          <button
            disabled={loading}
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            onClick={handleSubmit}
          >
            Sign In
          </button>
        </Link>
      </div>
    </nav>
  );
}
