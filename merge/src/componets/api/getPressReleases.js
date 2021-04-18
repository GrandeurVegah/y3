export default function getPressReleases(ticker, setData) {
  const https = require("https");
  const key = process.env.REACT_APP_fmp_key;
  const stocks = require("stock-ticker-symbol");

// use diffrent API
  try {
    if (typeof ticker === "string" && stocks.lookup(ticker) !== null) {
      console.log("press working");
      const options = {
        hostname: "financialmodelingprep.com",
        port: 443,
        path: "/api/v3/press-releases/" + ticker + "?limit=3&apikey=" + key,
        method: "GET",
      };

      const req = https.request(options, (res) => {
        var str = "";
        res.on("data", (d) => {
          str += d;
          console.log(str);
          console.log(d);
          setData((oldvalue) => {
            return { ...oldvalue, pressReleaseData: d[0] };
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
