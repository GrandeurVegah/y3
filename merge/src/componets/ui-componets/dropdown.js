import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../index";
export default function Dropdown({ isOpen, toggle }) {
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
  );
}
