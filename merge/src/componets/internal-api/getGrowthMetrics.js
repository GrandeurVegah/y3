export default async function getGrowthMetrics(ticker, setData) {
  const stocks = require("stock-ticker-symbol");
  if (typeof ticker === "string" && stocks.lookup(ticker) !== null) {
    const https = require("https");

    const options = {
      hostname: "financialmodelingprep.com",
      port: 443,
      path:
        "/api/v3/financial-growth/" +
        ticker +
        "?limit=20&apikey=" +
        "ba873c76009f98f9d823a837a205d45c",
      method: "GET",
    };

    const req = await https.request(options, (res) => {
      res.on("data", (d) => {
        try {
          const data = JSON.parse(d);
          console.log("Growth Metrics");
          setData((oldvalue) => {
            return {
              ...oldvalue,
              date: data[0].date,
              revenueGrowth: data[0].revenueGrowth,
              debtGrowth: data[0].debtGrowth,
            };
          });
        } catch {
          alert(
            "Please enter the company ticker again our data privider had an error with getting the data"
          );
          setTimeout(() => {
            window.location.reload(true);
            alert("Reloading due to data error");
          }, 2000);
        }
      });
    });

    req.on("error", (error) => {
      console.error(error);
    });

    req.end();
  }
}
