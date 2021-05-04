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
      <h1>Home</h1>
      {userDetails()}
      <div>
        <iframe
          width="100%"
          frameBorder="0"
          height="100%"
          src="https://widget.finnhub.io/widgets/etf-holdings?symbol=ARKK&theme=light"
          title="ARKK Holdings Data by Finnhub Stock API"
        ></iframe>
      </div>
      <div>.</div>
      <div>
        <iframe
          width="100%"
          frameBorder="0"
          height="100%"
          src="https://widget.finnhub.io/widgets/etf-holdings?symbol=SPY&theme=light"
          title="ARKK Holdings Data by Finnhub Stock API"
        ></iframe>
      </div>
      <div>.</div>
      <div>
        <iframe
          width="100%"
          frameBorder="0"
          height="100%"
          src="https://widget.finnhub.io/widgets/etf-holdings?symbol=QQQ&theme=light"
          title="ARKK Holdings Data by Finnhub Stock API"
        ></iframe>
      </div>
    </div>
  );
}
