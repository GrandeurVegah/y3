import "./App.css";
import { Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Search } from "./componets";
import { Navbar } from "./componets";
import { Home } from "./componets";
import { Dropdown } from "./componets";
import { Portfolio } from "./componets";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("i resized");
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

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
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />

      <Route exact path="/Search">
        <Search Ticker={ticker} handleTicker={handleTicker} setData={setData} />
      </Route>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Portfolio">
          <Portfolio />
        </Route>
      </Switch>

      <div>
        <h1>{ticker}</h1>
        <h1>{data.price}</h1>
        <h1>{data.comapanyName}</h1>
      </div>
    </div>
  );
}

export default App;
