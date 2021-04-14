import "./App.css";
import { Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  Search,
  Navbar,
  Home,
  Dropdown,
  Portfolio,
  AuthProvider,
  //PrivateRoute,
} from "./componets";

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
    price: 0,
    revenue: 0,
    debtGrowth: 0,
    costOfRevenue: 0,
    ebitda: 0,
    revenueGrowth: 0,
    enterpriseValueOverEBITDA: 0,
    enterpriseValue: 0,
    interestCoverage: 0,
    dividendYield: 0,
    roicTTM: 0,
    pressReleaseData: [],
    sentiment: "",
  });
  const [ticker, setTicker] = useState("");

  async function handleTicker(tickerData) {
    await setTicker(tickerData);
  }

  return (
    <div className="App">
      <AuthProvider>
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />

        <Route exact path="/Search">
          <Search
            Ticker={ticker}
            handleTicker={handleTicker}
            setData={setData}
          />
        </Route>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </AuthProvider>

      <div>
        <h1>{ticker}</h1>
        <h1>{data.price}</h1>
        <h1>{data.comapanyName}</h1>
        <h1>{data.enterpriseValueOverEBITDA}</h1>
        <h1>{data.enterpriseValue}</h1>
      </div>
    </div>
  );
}

export default App;
