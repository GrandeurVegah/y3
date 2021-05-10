import { getSentiment } from "../../componets";
export default async function getPressReleases(ticker, setData) {
  const https = require("https");

  const options = {
    hostname: "financialmodelingprep.com",
    port: 443,
    path:
      "/api/v3/stock_news?tickers=" +
      ticker +
      "&limit=5&apikey=" +
      "ba873c76009f98f9d823a837a205d45c",
    method: "GET",
  };

  const req = await https.request(options, (res) => {
    res.on("data", (d) => {
      try {
        const data = JSON.parse(d);
        console.log("News");
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
      } catch {
        alert(
          "Please enter the company ticker again our data privider had an error with getting the data "
        );
      }
    });
  });

  req.on("error", (error) => {
    console.error(error);
  });

  req.end();
}
