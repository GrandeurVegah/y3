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
  PrivateRoute,
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
    date: "",
    comapanyName: "",
    price: null,
    peRatio: null,
    revenue: null,
    debtGrowth: null,
    costOfRevenue: null,
    ebitda: null,
    ebitdaratio: null,
    revenueGrowth: null,
    enterpriseValueOverEBITDA: null,
    enterpriseValue: null,
    interestCoverage: null,
    roicTTM: null,
    pressReleaseData: [],
    sentiment: "",
  });
  const [ticker, setTicker] = useState("");

  async function handleTicker(tickerData) {
    setTicker(tickerData);
  }

  function displaySearch() {
    return (
      <Search
        Ticker={ticker}
        handleTicker={handleTicker}
        setData={setData}
        data={data}
      />
    );
  }

  return (
    <div className="App antialiased text-grey-900">
      <AuthProvider>
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />

        <PrivateRoute
          exact
          path="/Search"
          component={displaySearch}
        ></PrivateRoute>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </AuthProvider>
    </div>
  );
}

export default App;
