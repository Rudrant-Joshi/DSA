var maxProfit = function(prices) {
  let buy = prices[0];
  let result = 0;

  for(i=1; i<prices.length; i++){
    buy = Math.min(buy, prices[i]);

    let sell = prices[i];
    result = Math.max(result, sell-buy);
  }

  return result
};