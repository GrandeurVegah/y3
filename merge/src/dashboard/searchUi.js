import React, { useState } from "react";
import { getPrice } from "../componets";
import { getCompanyName } from "../componets";
//import { getPressReleases } from "../componets";
import { getCompanyMetrics } from "../componets";
export default function SearchUi(props) {
  const [ticker, setTicker] = useState("");
  async function changeTicker(event) {
    event.preventDefault();
    props.props.handleTicker(ticker);
    getPrice(ticker, props.props.setData);
    getCompanyName(ticker, props.props.setData);
    // Working ON
    //getPressReleases(tempTicker.current.value, props.setData);
    getCompanyMetrics(ticker, props.props.setData);
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
              onChange={(e) => setTicker(e.target.value)}
            />
          </label>
        </form>
      </div>
    </div>
  );
}
