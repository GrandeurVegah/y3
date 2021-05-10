//var code_alphavantage_API = ;

export default function getSentiment(data) {
  var sentiment = require("wink-sentiment");
  const score = sentiment(data);
  return score.normalizedScore;
}
