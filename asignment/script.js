function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Please provide a number!";
  }
  const cube = Math.pow(number, 3);
  return cube;
}
// console.log(cubeNumber('4'))


function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Please provide only strings!";
  } else {
    if (string1.includes(string2)) {
      return true;
    } else {
      return false;
    }
  }
}
// console.log(matchFinder('hello', 'ell'))

function sortMaker(arr) {
  if (!Array.isArray(arr) || arr.length > 2) {
    return "Please provide an array of two numbers!";
  }
  const sortedArray = [];
  let first = arr[0];
  let second = arr[1];
  if (first < 0 || second < 0) {
    return "Invalid Input";
  }
  const diff1 = first - second;
  const diff2 = second - first;

  if (diff1 === 0 && diff2 === 0) {
    return "equal";
  } else if (diff1 > diff2) {
    sortedArray.splice(0, 0, first, second);
  } else {
    sortedArray.splice(0, 0, second, first);
  }

  return sortedArray;
}
console.log(sortMaker([2, 91, 43]));





function findAddress(obj) {
    if(typeof obj !== "object"){
        return "Please provide an object"
    }
     else{
        const street = obj.street || "__";
        const house = obj.house || "__";
        const society = obj.society || "__";

        const sentence = street + "," + house + "," + society;
        return sentence;
     }
}

const obj1 = {
  street: 10,
  house: "15A",
  society: "Earth Perfect",
};
// console.log(findAddress(obj1))



function canPay(changeArray, totalDue) {
    if(changeArray.length === 0){
        return "Please provide an array of numbers!"
    }
    let sumOfChangeArrayItems = 0;
    for(let i = 0; i < changeArray.length; i++){
      const item = changeArray[i];
      sumOfChangeArrayItems += item;
    }
    if(sumOfChangeArrayItems < totalDue){
        return false;
    }
    else{
        return true
    }

}

console.log(canPay([1,5,5], 10))
