export default function getPrice(ticker, setData) {
  // Hide API token
  const fmp = require("financialmodelingprep")(process.env.REACT_APP_fmp_key);
  const stocks = require("stock-ticker-symbol");
  try {
    if (typeof ticker === "string" && stocks.lookup(ticker) !== null) {
      fmp
        .stock(ticker)
        .quote()
        .then((response) => {
          console.log("response");
          setData((oldvalue) => {
            return { ...oldvalue, price: response[0].price };
          });
        });
    }
  } catch {
    alert("Please enter the company ticker ");
  }
}
