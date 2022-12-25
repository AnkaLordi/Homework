const milk = 15.678;
const caviar = 123.965;
const bread = 90.2345;

const a = Math.max(milk, caviar, bread);
console.log(a);

const b = Math.min(milk, caviar, bread);
console.log(b);

const sum = milk + caviar + bread;
console.log(sum);

const milkNoCoins = Math.floor(milk);
const caviarNoCoins = Math.floor(caviar);
const breadNoCoins = Math.floor(bread);
const sumNoCoins = milkNoCoins + caviarNoCoins + breadNoCoins;
console.log(sumNoCoins);

const sumToHundreds = Math.ceil(sumNoCoins);
console.log(sumToHundreds);

//Виведіть суму товарів округлену до сотень. - поняття не маю, як зробити//

if (sumNoCoins % 2 == 0) {
  console.log("true");
} else {
  console.log("false");
}

const change = 500 - sum;
console.log(change);

const average = sum / 3;
console.log(average.toFixed(2));

const discount = Math.random();
const sumNew = sum * discount;
console.log(sumNew.toFixed(2));

const clientPayment = sum * discount; //260,66*10%
const lag = sum - clientPayment; //26
const costPrice = sum / 2;

const income = costPrice - lag;
console.log(income);
