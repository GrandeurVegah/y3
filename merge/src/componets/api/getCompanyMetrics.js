export default function getCompanyMetrics(ticker, setData) {
  const stocks = require("stock-ticker-symbol");
  try {
    if (typeof ticker === "string" && stocks.lookup(ticker) !== null) {
      const https = require("https");

      const options = {
        hostname: "financialmodelingprep.com",
        port: 443,
        path:
          "/api/v3/key-metrics-ttm/" +
          ticker +
          "?apikey=" +
          process.env.REACT_APP_fmp_key,
        method: "GET",
      };

      const req = https.request(options, (res) => {
        res.on("data", (d) => {
          console.log("KEY Metric");
          const data = JSON.parse(d);
          console.log(data[0]);
          setData((oldvalue) => {
            return {
              ...oldvalue,
              enterpriseValue: data[0].enterpriseValueTTM,
              enterpriseValueOverEBITDA: data[0].enterpriseValueOverEBITDATTM,
              interestCoverage: data[0].interestCoverage,
              peRatio: data[0].peRatioTTM,
              roicTTM: data[0].roicTTM,
            };
          });
        });
      });

      req.on("error", (error) => {
        console.error(error);
      });

      req.end();
    }
  } catch {
    alert("Please enter the company ticker ");
  }
}
