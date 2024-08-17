import React, { useState } from "react";
import { getPrice } from "../componets/api";
import { getCompanyName } from "../componets/api";
import { getFinancialStatment } from "../componets/api";
import { getCompanyGrowthMetrics } from "../componets/api";
import { getCompanyMetrics } from "../componets/api";
export default function SearchUi(props) {
  const [ticker, setTicker] = useState("");

  async function changeTicker(event) {
    event.preventDefault(); 
    const tick = ticker.toUpperCase();
    props.props.handleTicker(tick);
    window.addEventListener(
      "resize",
      await getPrice(ticker, props.props.setData),
      await getCompanyName(ticker, props.props.setData),
      await getFinancialStatment(ticker, props.props.setData),
      await getCompanyGrowthMetrics(ticker, props.props.setData),
      await getCompanyMetrics(ticker, props.props.setData),
      //await getPressReleases(ticker, props.props.setData)
    );
    return function cleanupListener() {
      window.removeEventListener(
        "resize",
        getPrice(ticker, props.props.setData),
        getCompanyName(ticker, props.props.setData),
        getFinancialStatment(ticker, props.props.setData),
        getCompanyGrowthMetrics(ticker, props.props.setData),
        getCompanyMetrics(ticker, props.props.setData),
      );
    };
  }

  return (
    <div className="pt-6">
      <div>
        <form onSubmit={changeTicker}>
          <label>
            <input
              className="bg-white w-96 placeholder-black placeholder-center rounded-full py-3 px-6 ring-red"
              placeholder="Search Ticker"
              type="text"
              value={ticker}
              onChange={(e) => setTicker(e.target.value.toUpperCase())}
            />
          </label>
        </form>
      </div>
    </div>
  );
}
