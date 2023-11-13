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

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Note: input will never be an empty string

function replaceDigits(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    let digit = string[i];
    if (parseInt(digit) < 5) {
      result += "0";
    } else {
      result += "1";
    }
  }
  return result;
}

console.log(replaceDigits("456723"));





// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
let words=["hello", "world", "this", "is", "great"]
function smash(words) {
  let sentence = "";
  for (let i = 0; i < words.length; i++) {
    sentence += words[i];
    return sentence;
  }
}
console.log(smash(words));

// const array= ['hello', 'world', 'this', 'is', 'great']  ;
// let sentence= "";
// function myfunc(myarray){
// for(let word of myarray){
// sentence= sentence +" "+ word
// }
// return sentence
// }
// console.log(myfunc(array));
