export function getGrowthMetrics({ ticker }) {
  const fmp = require("financialmodelingprep")(process.env.REACT_APP_fmp_key);
  const stocks = require("stock-ticker-symbol");
  try {
    if (typeof ticker === "string" && stocks.lookup(ticker) !== null) {
    }
  } catch {
    alert("Please enter the company ticker ");
  }
}
