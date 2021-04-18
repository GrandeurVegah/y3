import React from "react";
import { getPrice } from "../componets";
import { getCompanyName } from "../componets";
//import { getPressReleases } from "../componets";
import { getCompanyMetrics } from "../componets";


export default function searchCard(props) {
  const tempTicker = "";

  async function changeTicker(event) {
    event.preventDefault();
    const query = tempTicker.toUpperCase();
    props.handleTicker(query);
    getPrice(query, props.setData);
    getCompanyName(query, props.setData);
    // Working ON
    //getPressReleases(tempTicker.current.value, props.setData);
    //getCompanyMetrics(query, props.setData);
  }

  return (
    <div className="">
      <div className="">
        <h2 className="">Search Stock Code:</h2>
        <input type="text" value={tempTicker} onSubmit={changeTicker} />
        <input type="submit" value="Submit" />
      </div>
    </div>
  );
}
