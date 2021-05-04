import React from "react";
import { SearchUI } from "../componets";
//import { FliterCard } from "../componets";

export default function Search(props) {
  function sentCalc() {
    const sent = props.data.sentiment;
    if (sent === null) {
      return "";
    }
    if (sent <= -1) {
      return "Negative";
    } else if (sent >= 1) {
      return "Positive";
    } else {
      return "Neutral";
    }
  }
  return (
    <div className="min-h-screen flex items-center bg-white">
      <div className="flex-1 max-w-4xl mx-auto p-10">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          <li className="col-span-3 bg-gray-50 rounded-lg shadow-xl justify-items-center px-100 content-center">
            <div className="h-24">
              <SearchUI props={props} />
            </div>
          </li>
          <li className="row-span-2 bg-gray-50 rounded-lg shadow-xl">
            <div className="h-24 pt-3 pl-3 pr-3 text-left">
              <div>
                <div className="bg-gray-100 border rounded-lg">
                  <div className="p-1 pl-3 font-bold">
                    Price: {props.data.price}
                  </div>
                </div>
              </div>
              <div className="pt-1">
                <div className="bg-gray-100 border rounded-lg">
                  <div className="p-1 pl-3 font-bold">
                    Revenue: {props.data.revenue}
                  </div>
                </div>
              </div>
              <div className="pt-1">
                <div className="bg-gray-100 border rounded-lg">
                  <div className="p-1 pl-3 font-bold">
                    Cost Of Revenue: {props.data.costOfRevenue}
                  </div>
                </div>
              </div>
              <div className="pt-1">
                <div className="bg-gray-100 border rounded-lg">
                  <div className="p-1 pl-3 font-bold">
                    Revenue Growth: {props.data.revenueGrowth * 10}
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="bg-gray-50  rounded-lg shadow-xl">
            <div className="h-24">
              <div className="pt-1">
                <div className="bg-gray-100 border rounded-lg">
                  <div className="p-1 pl-3 font-bold">
                    Sentiment Score: {props.data.sentiment}
                  </div>
                </div>
              </div>
              <div className="pt-1">
                <div className="bg-gray-100 border rounded-lg">
                  <div className="p-1 pl-3 font-bold">
                    Sentiment: {sentCalc()}
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="bg-gray-50  rounded-lg shadow-xl">
            <div className="h-24">
              <div className="pt-1">
                <div className="bg-gray-100 border rounded-lg">
                  <div className="p-1 pl-3 font-bold">
                    Comapny:{props.data.comapanyName}
                  </div>
                </div>
              </div>
              <div className="pt-1">
                <div className="bg-gray-100 border rounded-lg">
                  <div className="p-1 pl-3 font-bold">
                    ROIC: {props.data.roicTTM}
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="bg-gray-50  rounded-lg shadow-xl">
            <div className="h-24">
              <div className="pt-1">
                <div className="bg-gray-100 border rounded-lg">
                  <div className="p-1 pl-3 font-bold">
                    EBITDA: {props.data.ebitda}
                  </div>
                </div>
              </div>
              <div className="pt-1">
                <div className="bg-gray-100 border rounded-lg">
                  <div className="p-1 pl-3 font-bold">
                    EBITDA Ratio{props.data.ebitdaratio}
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="bg-gray-50  rounded-lg shadow-xl">
            <div className="h-24">
              <div className="pt-1">
                <div className="bg-gray-100 border rounded-lg">
                  <div className="p-1 pl-3 font-bold">
                    Enterprise Value: {props.data.enterpriseValue}
                  </div>
                </div>
              </div>
              <div className="pt-1">
                <div className="bg-gray-100 border rounded-lg">
                  <div className="p-1 pl-3 font-bold">
                    EV / EBITDA: {props.data.enterpriseValueOverEBITDA}
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="bg-gray-50  rounded-lg shadow-xl">
            <div className="h-24">
              <div className="pt-1">
                <div className="bg-gray-100 border rounded-lg">
                  <div className="p-1 pl-3 font-bold">
                    interest Coverage: {props.data.interestCoverage}
                  </div>
                </div>
              </div>
              <div className="pt-1">
                <div className="bg-gray-100 border rounded-lg">
                  <div className="p-1 pl-3 font-bold">
                    PE Ratio: {props.data.peRatio}
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="bg-gray-50  rounded-lg shadow-xl">
            <div className="h-24">
              <div className="pt-1">
                <div className="bg-gray-100 border rounded-lg">
                  <div className="p-1 pl-3 font-bold">
                    <a
                      href={props.data.pressReleaseData.news1}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Artical One
                    </a>
                  </div>
                </div>
              </div>
              <div className="pt-1">
                <div className="bg-gray-100 border rounded-lg">
                  <div className="p-1 pl-3 font-bold">
                    <a
                      href={props.data.pressReleaseData.news2}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Artical 2
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="bg-gray-50  rounded-lg shadow-xl">
            <div className="h-24">
              <div className="pt-1">
                <div className="bg-gray-100 border rounded-lg">
                  <div className="p-1 pl-3 font-bold">
                    <a
                      href={props.data.pressReleaseData.news3}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Artical Three
                    </a>
                  </div>
                </div>
              </div>
              <div className="pt-1">
                <div className="bg-gray-100 border rounded-lg">
                  <div className="p-1 pl-3 font-bold">
                    <a
                      href={props.data.pressReleaseData.news4}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Artical Four
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
