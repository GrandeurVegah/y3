import "./App.css";
import { Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  Search,
  Navbar,
  Home,
  Dropdown,
} from "./componets";
import {
  AuthProvider,
  PrivateRoute,
} from "./componets/Auth";

function App() {
  const stocks = require("stock-ticker-symbol");
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
    interestCoverage: "N/A",
    roicTTM: null,
    pressReleaseData: {},
    sentiment: null,
  });
  const [ticker, setTicker] = useState("");

  function clearData() {
    setData({
      date: "",
      companyName: "",
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
      interestCoverage: "N/A",
      roicTTM: null,
      pressReleaseData: {},
      sentiment: null,
    });
  }

  async function handleTicker(tickerData) {
    clearData()
    if (typeof tickerData === "string" && stocks.lookup(tickerData) !== null) {
      setTicker(tickerData);
      return
    } else{
      alert("Ticker not found please try again");
    }
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
        </Switch>
      </AuthProvider>
    </div>
  );
}

export default App;
