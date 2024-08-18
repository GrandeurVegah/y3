export default function getCompanyName(ticker, setData) {
  const stocks = require("stock-ticker-symbol");
  const name = stocks.lookup(ticker);
  setData((oldvalue) => {
    return { ...oldvalue, comapanyName: name };
  });
}
