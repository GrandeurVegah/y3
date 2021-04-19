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
    <div>
      <div>
        <form onSubmit={changeTicker}>
          <label>
            <h2 className="">Search Stock Code:</h2>
            <input
              type="text"
              value={ticker}
              onChange={(e) => setTicker(e.target.value)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
