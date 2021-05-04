//var code_alphavantage_API = ;

export default function getSentiment(data) {
  // 1-5 positive
  // -5 to -1 negative
  // 0 Neutral
  var sentiment = require("wink-sentiment");
  const score = sentiment(data);

  return score.normalizedScore;

  
}
