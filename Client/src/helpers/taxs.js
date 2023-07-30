export function addPercent(originalPrice) {
    const percent = 2.5;
    const increase = originalPrice * (percent / 100);
    const newPrice = originalPrice + increase;
    return newPrice;
  }