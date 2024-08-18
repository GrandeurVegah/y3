import React from "react";
import { SearchUI } from "../componets";
// Search Page 
export default function Search(props) {
  const fields = [
    { key: "date", label: "Date" },
    { key: "comapanyName", label: "Company" },
    { key: "price", label: "Price" },
    { key: "peRatio", label: "P/E Ratio" },
    { key: "revenue", label: "Revenue" },
    { key: "debtGrowth", label: "Debt Growth" },
    { key: "costOfRevenue", label: "Cost Of Revenue" },
    { key: "ebitda", label: "EBITDA" },
    { key: "ebitdaratio", label: "EBITDA Ratio" },
    { key: "revenueGrowth", label: "Revenue Growth" },
    { key: "enterpriseValueOverEBITDA", label: "EV/EBITDA" },
    { key: "enterpriseValue", label: "Enterprise Value" },
    { key: "roicTTM", label: "ROIC" },
    { key: "sentiment", label: "Sentiment" },
  ];

  const renderValue = (key, value) => {
    console.log(props)
    if (typeof value === "object" && value !== null) {
      return (
        <pre className="p-1 pl-3">
          {JSON.stringify(value, null, 2)}
        </pre>
      );
    }

    return (
      <div className="p-1 pl-3 font-bold">
        {key === "revenueGrowth" ? value * 100 : value}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex items-center bg-white">
      <div className="flex-1 max-w-4xl mx-auto p-10">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          <li className="col-span-3 bg-gray-50 rounded-lg shadow-xl justify-items-center px-100 content-center">
            <div className="h-24">
              <SearchUI props={props} />
            </div>
          </li>

          {fields.map((field) =>
            props.data[field.key] ? (
              <li key={field.key} className="bg-gray-100 rounded-xl shadow-lg">
              <div className="h-24 flex items-center justify-center">
                <div className="bg-white border border-gray-200 rounded-lg p-4 w-full max-w-xs">
                  <div className="text-sm font-semibold text-gray-500 mb-1">
                    {field.label}:
                  </div>
                  <div className="text-lg font-bold text-gray-900">
                    {renderValue(field.key, props.data[field.key])}
                  </div>
                </div>
              </div>
            </li>
            ) : null
          )}
        </ul>
      </div>
    </div>
  );
}