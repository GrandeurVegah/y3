import { getSentiment } from "../../componets";
export default function getPressReleases(ticker, setData) {
  try {
    const https = require("https");

    const options = {
      hostname: "financialmodelingprep.com",
      port: 443,
      path:
        "/api/v3/stock_news?tickers=" +
        ticker +
        "&limit=5&apikey=" +
        "49ed8857a060e2ab52e6014789fd0f33",
      method: "GET",
    };

    const req = https.request(options, (res) => {
      res.on("data", (d) => {
        const data = JSON.parse(d);
        console.log(data);
        const a = getSentiment(data[0].text);
        const b = getSentiment(data[1].text);
        const c = getSentiment(data[2].text);
        const f = getSentiment(data[3].text);
        const e = getSentiment(data[4].text);
        const sum = (a + b + c + f + e) / 5;
        console.log(sum);
        setData((oldvalue) => {
          return {
            ...oldvalue,
            pressReleaseData : data,
            sentiment : sum
          };
        });
      });
    });

    req.on("error", (error) => {
      console.error(error);
    });

    req.end();
  } catch (error) {}
}
