function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  let result = 1;
  for (let i = num; i >= 1; i--) {
    // console.log(i);
    result *= i;
  }
  // return result;
}
const nums = 6;
const res = factorial(nums);
// console.log(res);

function largestNum(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  // return largest;
}

const numbers = [2, 9, 2, 77, 3, 44];
const result = largestNum(numbers);
// console.log(result)

function biggestName(names) {
  let biggest = names[0];
  for (let i = 1; i < names.length; i++) {
    const name = names[i];
    //  console.log(name)
    if (name.length > biggest.length) {
      biggest = name;
    }
  }
  // return biggest
}

const names = ["maru", "protiva", "xo"];
const biggest = biggestName(names);
// console.log(biggest);

function findVowel(s) {
  if (typeof s !== "string") {
    return "Please provide me a string";
  }
  let vowelsArray = [];
  let vowels = 0;
  let consonent = 0;
  let space = 0;
  for (let i = 0; i < s.length; i++) {
    const letter = s[i].toLowerCase();
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      vowelsArray.push(letter);
      vowels++;
    } else if (letter !== " ") {
      consonent++;
    } else {
      space++;
    }
  }
  const obj = {
    vowelCount: vowels,
    consonentCount: consonent,
    spaceCount: space,
    vowelsArray: vowelsArray,
  };
  //  return obj
}
const sentence = "i love robiul. he is my first and last lOve of my life.";

const vowels = findVowel(sentence);
// console.log(vowels)

//is interger?

function isInteger(num) {
  if (typeof num !== "number") {
    return "please provide a number ";
  }
  if (num % 0) {
    // return true
  } else {
    // return false
  }
}
// console.log(isInteger(2.5))

//is javaScript file

// function isJavaScriptFile(file){
//   if(typeof file !== "string"){
//     return "Please provide me a string"
//   }
//    let arr = file.split(".");
//    const lastWord = arr.pop();
//   // return lastWord.toLowerCase() === 'js'
// }
// const fileName = 'script.jS';
// const res1 = isJavaScriptFile(fileName);
// console.log(res1)

function isJavaScriptFile(file) {
  if (typeof file !== "string") {
    return "Please provide me a string";
  }
  /*   // if(file.includes('.js')){ ///he.js.html , so includes use kora jabe na
  //   return true
  // } */
  if (file.toLowerCase().endsWith(".js")) {
    return true;
  } else {
    return false;
  }
  // return file.toLowerCase().endsWith('.js')
}
const fileName = "script.jS";
const res1 = isJavaScriptFile(fileName);
// console.log(res1)

function mindGame(x) {
  if (typeof x !== "number" && x <= 0) {
    return "please provided a positive number";
  } else {
    const res = (x * 3 + 10) / 2 - 5;
    return res;
  }
}
// console.log(mindGame(5))

function add(a, b) {
  if (
    typeof a !== "number" /* && and use kora jabe na*/ ||
    typeof b !== "number"
  ) {
    return "please provided a number";
  }
  let res = a + b;
  return res;
}
// console.log(add("3", 5))

function isLGSeven(num) {
  if (typeof num !== "number") {
    return "Please provide me a number";
  }
  const difference = num - 7;
  if (difference < 7) {
    return difference;
  } else {
    return (num *= 2);
  }
}

// console.log(isLGSeven(-15))

function findingBadData(arr) {
  if(!Array.isArray(arr) === true){
    return "please provide a array"
  }
  let bedData = 0;
  let bedDataArr = [];
  // for (let i = 0; i < arr.length; i++) {
  //   const num = arr[i];
  //   if (num < 0) {
  //     bedDataArr.push(num);
  //    bedData++;
  //   }
  // }
  for(const num of arr){
       num = arr[i];
      if (num < 0) {
        bedDataArr.push(num);
       bedData++;
      }
  }
  return bedDataArr;
}
const nums4 = [-2, -4, 2, 6, 7];
const res3 = findingBadData(nums4);
console.log(res3);
