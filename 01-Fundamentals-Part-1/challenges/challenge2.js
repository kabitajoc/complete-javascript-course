/* Write your code below. Good luck! 🙂 */
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins);
console.log(scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the trophy");
} else {
  console.log("Noone wins the trophy");
}
