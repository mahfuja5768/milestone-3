//1.
function foo() {
  console.log("foo");
  bar();
}
function bar() {
  console.log("bar");
}
// foo()

//2.
function make_avg(a, b, c) {
  var avg = (a + b + c) / 3;
  return avg;
}

// const nums = make_avg(59, 60, 60);
// console.log('result is:', nums.toFixed(2));

//3.
function make_avg(arr, size) {
  let sum = 0;
  for (var i = 0; i < size; i++) {
    sum += arr[i];
  }
  return sum / size;
}

const arr = [2, 4, 1, 5, 3];
const size = 5;
// console.log(make_avg(arr, size))

// //4.a (has perams & no return)
// function odd_even(number){
//     if(number % 2 === 0){
//         console.log(number ,'this is even number ')
//     }
//     else{
//         console.log(number ,'this is odd number ')
//     }
// }
// const num = odd_even(22);

//4.b (no return & no perams)
// function odd_even(){
//     var number = 21;
//     if(number % 2 === 0){
//         console.log(number ,'this is even number ')
//     }
//     else{
//         console.log(number ,'this is odd number ')
//     }
// }
// odd_even();

//4.c (has return & no perams)
// function odd_even() {
//   var number = 1;
//   if (number % 2 === 0) {
//     return 'this is even number ';
//   } else {
//     return 'this is odd number ';
//   }
// }
// var res = odd_even();
// console.log(res)

//4.d (has return & has perams)
function odd_even(number) {
  if (number % 2 === 0) {
    return "this is even number ";
  } else {
    return "this is odd number ";
  }
}
const num = odd_even(22);
// console.log(num)

//5.
// var signal = 'yellow';
// if(signal === 'red'){
//     console.log('If you try to cross the road, you may be in danger.');
// }
// else if(signal === 'yellow'){
//     console.log('you should stop.')
// }
// else if(signal === 'green'){
//     console.log('you should cross the road.')
// }

var signal = "yellow";
switch (signal) {
  case "red":
    console.log("If you try to cross the road, you may be in danger.");
    break;
  case "green":
    console.log("you should cross the road.");
    break;
  case "yellow":
    console.log("you should stop.");
    break;
}
