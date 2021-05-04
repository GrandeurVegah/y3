export default function getFinancialStatment(ticker, setData) {
  const stocks = require("stock-ticker-symbol");
  var numeral = require("numeral");
  try {
    if (typeof ticker === "string" && stocks.lookup(ticker) !== null) {
      const https = require("https");

      const options = {
        hostname: "financialmodelingprep.com",
        port: 443,
        path:
          "/api/v3/income-statement/" +
          ticker +
          "?limit=20&apikey=" +
          process.env.REACT_APP_fmp_key,
        method: "GET",
      };

      const req = https.request(options, (res) => {
        res.on("data", (d) => {
          const data = JSON.parse(d);
          if (data[0].revenue && data[0].ebitdaratio && data[0].costOfRevenue) {
            console.log("Finacial Statment");
            var num1 = numeral(data[0].revenue);
            var num2 = numeral(data[0].costOfRevenue);
            var revenue = num1.format("($ 0.00 a)");
            var costOfRevenue = num2.format("($ 0.00 a)");
            setData((oldvalue) => {
              return {
                ...oldvalue,
                revenue: revenue,
                ebitdaratio: data[0].ebitdaratio,
                costOfRevenue: costOfRevenue,
              };
            });
          } else {
            alert(
              "Please enter the company ticker again our data privider had an error with get the Financial Metrics data"
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
