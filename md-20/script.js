//1.
function convertToMinutes(hour) {
  var minutes = hour * 60;
  return minutes;
}

var givenHour = convertToMinutes(2);
// console.log(givenHour);

//2.
function findLeapYear(arr) {
  let leapYears = [];
  for (var i = 0; i < arr.length; i++) {
    var element = arr[i];
    if (element % 4 === 0 && element % 100 !== 0 || element % 400 === 0) {
      leapYears.push(element);
    }
  }
  return leapYears;
}

const years = [1952, 2023, 2024, 2025, 2028, 2030, 2032, 1960];
const leapYears = findLeapYear(years);
// console.log(leapYears);


//3.
function inchToFeet(inch){
    var feet = inch / 12;
    return feet;
}

const inches = 84;
const feets = inchToFeet(inches);
// console.log(feets)


//4.
function milesToKm(mile){
    var km = mile * 1.60934;
    return km;
}

const miles = 2;
const kms = milesToKm(miles);
// console.log(kms)

//5.
function findOddSum(arr){
    let sum = 0;
    let oddNums = [];
    for(var i = 0; i < arr.length ; i++){
        let element = arr[i];
        if(element % 2 !== 0 ){
            oddNums.push(element);
            sum += element;
        }
    }
    console.log(oddNums);
    return sum;
}

const nums = [1,2,3,4,5];
let oddSum = findOddSum(nums);
console.log(oddSum)

















































































































































































