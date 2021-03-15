import "./App.css";
import React, { useState } from "react";
import { Search } from "./componets";
import { Dashboard } from "./componets";

function App() {
  const [data, setData] = useState({
    comapanyName: "",
    price: 20,
    balacncesheet: { cashAndCashEquivalents: 0 },
    growthMetrics: {},
    pressReleases: {},
    sentiment: "",
  });
  const [ticker, setTicker] = useState("");

  async function handleTicker(tickerData) {
    await setTicker(tickerData);
  }

  return (
    <div className="App">
      <Search Ticker={ticker} handleTicker={handleTicker} setData={setData} />
      <h1>{ticker}</h1>
      <h1>{data.price}</h1>
      <h1>{data.comapanyName}</h1>
    </div>
  );
}

export default App;
