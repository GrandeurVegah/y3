import { fmpOptions } from "../intergrations";
export default async function getPrice(ticker, setData) {
  //var numeral = require("numeral");
  const https = require("https");
  const options = fmpOptions(process.env.REACT_APP_fmp_price_api, ticker);
  const stocks = require("stock-ticker-symbol");

  if (typeof ticker === "string" && stocks.lookup(ticker) !== null) {
    const req = await https.request(options, (res) => {
      res.on("data", (d) => {
        try {
          const data = JSON.parse(d);
          console.log(data[0].name);
          setData((oldvalue) => {
            return {
              ...oldvalue,
              comapanyName: data[0].name,
              price: data[0].price,
            };
          });
        } catch (error) {
          console.log("failed");
        }
      });
    });

    req.on("error", (error) => {
      console.error(`Problem with request: ${error.message}`);
    });

    req.end();
  }
}
