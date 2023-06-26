const items = {
  item1: 10,
  item2: 5,
  item3: 25,
};
console.log(items);

let exchangeRate = 80;

let convertedPrices = Object.fromEntries(
  Object.entries(items).map(([key, value]) => [key, value * exchangeRate])
);
console.log(convertedPrices);
