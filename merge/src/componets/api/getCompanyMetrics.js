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
          "49ed8857a060e2ab52e6014789fd0f33",
        method: "GET",
      };

      const req = https.request(options, (res) => {
        res.on("data", (d) => {
          const data = JSON.parse(d);
          console.log(data)
          if (
            data[0].enterpriseValueTTM &&
            data[0].enterpriseValueOverEBITDATTM &&
            //data[0].interestCoverageTTM &&
            data[0].peRatioTTM &&
            data[0].roicTTM
          ) {
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
          } else {
            alert(
              "Please enter the company ticker again our data privider had an error with get the Key Metric data"
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
