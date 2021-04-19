import React from "react";
import { useAuth } from "../componets/index";
export default function Home() {
  const { currentUser } = useAuth();
  function userDetails() {
    if (currentUser) {
      return (
        <div>
          <div>Email: {currentUser.email} </div>
        </div>
      );
    }
  }
  return (
    <div>
      <h1>Home sdjbj</h1>
      {userDetails()}
    </div>
  );
}
