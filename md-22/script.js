//pb-1

function feetToInch(feet) {
  let inches = feet * 12;
  // return inches
}
const convertedToInches = feetToInch(2);
// console.log(convertedToInches);

//pb-2

function feetToMeter(cm) {
  let meter = cm * 100;
  // return  meter;
}
const convertedToMeter = feetToMeter(2);
// console.log(convertedToMeter);

//pb-3
var book1Page = 100;
var book2Page = 200;
var book3Page = 300;
function paperRequirements(book1Quantity, book2Quantity, book3Quantity) {
  book1PageNeeded = book1Page * book1Quantity;
  book2PageNeeded = book2Page * book2Quantity;
  book3PageNeeded = book3Page * book3Quantity;
  let totalPageNeeded = book1PageNeeded + book2PageNeeded + book3PageNeeded;
  // return totalPageNeeded;
}
const totalPage = paperRequirements(0, 1, 0);
// console.log(totalPage);

//pb-4
function onlyPositive(arr) {
  let positiveNums = [];
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num > 0) {
      positiveNums.push(num);
    }
  }
  // return positiveNums;
}

const nums = [2, -4, 65, 7, -2, -11];
const res = onlyPositive(nums);
//  console.log(res)

//pb-5
function bestFriend(arr) {
  let size = 0;
  let bigName = [];
  for (let i = 0; i < arr.length; i++) {
    const name = arr[i];
    if(name.length >= size){
      size= arr[i].length;
      if(bigName.length < size){
        bigName = [];
        bigName.push(arr[i])
      }
    }
  }
  return bigName;
}

const names = ["myra", "mahfuja ahasan muna", "marufa", "robiul islam"];
const homie = bestFriend(names);
console.log(homie);
