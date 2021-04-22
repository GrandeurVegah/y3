export default function getGrowthMetrics(ticker, setData) {
  const stocks = require("stock-ticker-symbol");
  try {
    if (typeof ticker === "string" && stocks.lookup(ticker) !== null) {
      const https = require("https");

      const options = {
        hostname: "financialmodelingprep.com",
        port: 443,
        path:
          "/api/v3/financial-growth/" +
          ticker +
          "?limit=20&apikey=" +
          process.env.REACT_APP_fmp_key,
        method: "GET",
      };

      const req = https.request(options, (res) => {
        res.on("data", (d) => {
          console.log("Growth Metrics");
          const data = JSON.parse(d);
          //console.log(data[0]);
          setData((oldvalue) => {
            return {
              ...oldvalue,
              date: data[0].date,
              revenueGrowth: data[0].revenueGrowth,
              debtGrowth: data[0].debtGrowth,
              interestCoverage: data[0].interestCoverage,
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
