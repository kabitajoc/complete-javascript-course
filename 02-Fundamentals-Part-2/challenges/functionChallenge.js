const calcAverage = (data1, data2, data3) => (data1 + data2 + data3) / 3;

console.log(calcAverage(1, 2, 3));
//Test 1

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreKoalas, scoreDolphins);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} v.s ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} v.s ${avgDolphins})`);
  } else {
    console.log("Noone Wins");
  }
};

checkWinner(scoreDolphins, scoreKoalas);

//Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
