/**
 * 7. Make a program that converts USD to the currency of your choice.
 **/
function USDtoKRW() {
  // Feb 2 --> 1 USD == 1338.93 KRW
  let USD = prompt("Please enter a price in USD: ");
  let USDtoKRW = Math.round(Number(USD) * 1338.93)
  console.log(`${USD} USD in KRW is ${USDtoKRW}`)
}

USDtoKRW()