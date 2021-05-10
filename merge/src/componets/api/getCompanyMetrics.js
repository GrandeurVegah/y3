export default function getCompanyMetrics(ticker, setData) {
  const stocks = require("stock-ticker-symbol");
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
        try {
          const data = JSON.parse(d);
          console.log("KEY Metric");

          setData((oldvalue) => {
            return {
              ...oldvalue,
              enterpriseValue: data[0].enterpriseValueTTM,
              enterpriseValueOverEBITDA: data[0].enterpriseValueOverEBITDATTM,
              //interestCoverage: data[0].interestCoverageTTM,
              peRatio: data[0].peRatioTTM,
              roicTTM: data[0].roicTTM,
            };
          });
        } catch {
          alert(
            "Please enter the company ticker again our data privider had an error with getting the data"
          );
        }
      });
    });
    req.on("error", (error) => {
      console.error(error);
    });

    req.end();
  }
}
