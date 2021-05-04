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
          "49ed8857a060e2ab52e6014789fd0f33",
        method: "GET",
      };

      const req = https.request(options, (res) => {
        res.on("data", (d) => {
          const data = JSON.parse(d);
          if (data[0].date && data[0].revenueGrowth && data[0].debtGrowth) {
            console.log("Growth Metrics");
            setData((oldvalue) => {
              return {
                ...oldvalue,
                date: data[0].date,
                revenueGrowth: data[0].revenueGrowth,
                debtGrowth: data[0].debtGrowth,
              };
            });
          } else {
            alert(
              "Please enter the company ticker again our data privider had an error with get the Growth Metrics data "
            );
          }
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
