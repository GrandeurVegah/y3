export function getPressReleases({ ticker }) {
    const https = require("https");
    const fmp = require("financialmodelingprep")(process.env.REACT_APP_fmp_key);
    const stocks = require("stock-ticker-symbol");
  try {
    if (typeof ticker === "string" && stocks.lookup(ticker) !== null) {
      

      const options = {
        hostname: "financialmodelingprep.com",
        port: 443,
        path: "/api/v3/press-releases/"+ticker+"?limit=100&apikey=demo",
        method: "GET",
      };

      const req = https.request(options, (res) => {
        res.on("data", (d) => {
          process.stdout.write(d);
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
