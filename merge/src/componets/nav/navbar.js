import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../index";
export default function NavBar({ toggle }) {
  const { login } = useAuth();
  const { logout } = useAuth();
  const { currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  function displyText() {
    if (!currentUser) {
      return (
        <div>
          <div>Sign In </div>
        </div>
      );
    }
    return (
      <div>
        <div>Sign Out </div>
      </div>
    );
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (!currentUser) {
      try {
        setError("");
        setLoading(true);
        await login();
        history.push("/Search");
      } catch {
        setError("Failed to log in");
      }
    }

    if (currentUser) {
      try {
        await logout();
        history.push("/");
      } catch {
        setError("Failed to log out");
      }
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
        <Link to="/Search" className="p-4">
          {error && alert({ error })}
          <button
            disabled={loading}
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            onClick={handleSubmit}
          >
            {displyText()}
          </button>
        </Link>
      </div>
    </nav>
  );
}
