//var code_alphavantage_API = "XALLY0EEPIQTOZEB";

export default function getSentiment(data, SetData) {
  // 1-5 positive
  // -5 to -1 negative
  // 0 Neutral
  var sentiment = require("wink-sentiment");
  const score = sentiment(data);

  if (score.normalizedScore <= -1) {
    setData((oldvalue) => {
      return { ...oldvalue, sentiment: "Negative" };
    });
  } else if (score.normalizedScore >= 1) {
    setData((oldvalue) => {
      return { ...oldvalue, sentiment: "Positive" };
    });
  } else {
    setData((oldvalue) => {
      return { ...oldvalue, sentiment: "Neutral" };
    });
  }
}
