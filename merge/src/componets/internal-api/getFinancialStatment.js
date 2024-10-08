export default async function getFinancialStatment(ticker, setData) {
  const stocks = require("stock-ticker-symbol");
  var numeral = require("numeral");
  if (typeof ticker === "string" && stocks.lookup(ticker) !== null) {
    const https = require("https");

    const options = {
      hostname: "financialmodelingprep.com",
      port: 443,
      path:
        "/api/v3/income-statement/" +
        ticker +
        "?limit=20&apikey=" +
        "ba873c76009f98f9d823a837a205d45c",
      method: "GET",
    };

    const req = await https.request(options, (res) => {
      res.on("data", (d) => {
        try {
          const data = JSON.parse(d);
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
