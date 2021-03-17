export default function getBalanceSheet(ticker, setData) {

  // health of the comany, Rev growth Gross margin Ebitda Margin, cash conversion ratio , intrest coverage ratio
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
