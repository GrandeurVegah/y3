import React, { useState } from "react";
// Search Bar UI and functionality 
export default function SearchUi(props) {
  const [ticker, setTicker] = useState("");
  async function changeTicker(event) {
    event.preventDefault(); 
    const tick = ticker.toUpperCase();
    props.props.handleTicker(tick);
    
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
