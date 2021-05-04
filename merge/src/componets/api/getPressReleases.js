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
        if (
          (data[0].title,
          data[1].title,
          data[2].title,
          data[3].title,
          data[4].title) !== null ||
          undefined
        ) {
          console.log(data);
          const a = getSentiment(data[0].title);
          const b = getSentiment(data[1].title);
          const c = getSentiment(data[2].title);
          const f = getSentiment(data[3].title);
          const e = getSentiment(data[4].title);
          const sum = (a + b + c + f + e) / 5;
          console.log(sum);
          setData((oldvalue) => {
            return {
              ...oldvalue,
              pressReleaseData: {
                news1: data[0].url,
                news2: data[1].url,
                news3: data[2].url,
                news4: data[3].url,
                news5: data[4].url,
              },
              sentiment: sum,
            };
          });
        } else {
          alert(
            "Please enter the company ticker again our data privider had an error with get the Growth Metrics data "
          );
        }
      });
    });

    req.on("error", (error) => {
      console.error(error);
    });

    req.end();
  } catch (error) {}
}
