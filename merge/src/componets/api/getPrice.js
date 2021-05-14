export default async function getPrice(ticker, setData) {
  var numeral = require("numeral");
  const fmp = require("financialmodelingprep")(
    "ba873c76009f98f9d823a837a205d45c"
  );
  const stocks = require("stock-ticker-symbol");

  if (typeof ticker === "string" && stocks.lookup(ticker) !== null) {
    await fmp
      .stock(ticker)
      .quote()
      .then((response) => {
        try {
          console.log("Price Respones");
          var num1 = numeral(response[0].price);
          var price = num1.format("$0,0.00");
          setData((oldvalue) => {
            return {
              ...oldvalue,
              price: price,
            };
          });
        } catch {
          alert(
            "Please enter the company ticker again our data privider had an error with getting the data "
          );
          setTimeout(() => {
            window.location.reload(true);
            console.log("Reloaded");
          }, 2000);
        }
      });
  }
}
