import { stock } from "../componets";
export default function CandleData(ticker, setData) {
  try {
    stock
      .get("/stock/candle", {
        params: {
          symbol: stockValue,
          resolution: 5,
          from: endDate,
          to: startDate,
          token: process.env.REACT_APP_fin_key,
        },
      })
      .then((response) => {
        console.log("response");
        setData((oldvalue) => {
          return { ...oldvalue, price: response[0].price };
        });
      });
  } catch (error) {
    alert(error);
    console.log(error)
  }
}
