export default function getBalanceSheet(ticker, setData) {
  try {
    if (typeof ticker === "string" && stocks.lookup(ticker) !== null) {
      fmp
        .stock(ticker)
        .financial.balancesheet((period = "annual"))
        .then((response) => {
          console.log("response");
          // edit
          setData((oldvalue) => {
            return { ...oldvalue, price: response[0].price };
          });
        });
    }
  } catch {
    alert("Please enter the company ticker ");
  }
}
