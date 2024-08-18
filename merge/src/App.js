import "./App.css";
import { Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getPrice } from "./componets/internal-api";
import { getFinancialStatment } from "./componets/internal-api";
import { getCompanyGrowthMetrics } from "./componets/internal-api";
import { getCompanyMetrics } from "./componets/internal-api";
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
  const [ticker, setTicker] = useState("");
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

  useEffect(() => {
    if (!ticker) return;
    const fetchData = async () => {
      await Promise.all([
        getPrice(ticker, setData),
        getFinancialStatment(ticker, setData),
        getCompanyGrowthMetrics(ticker, setData),
        getCompanyMetrics(ticker, setData)
      ]);
    };
    fetchData();
  }, [ticker]);

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
