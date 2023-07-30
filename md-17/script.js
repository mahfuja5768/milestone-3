//practice-1
var fruits = ['apple', 'banana', 'orange'];
//a.
var positionOfBanana = fruits.indexOf('banana');
// console.log(positionOfBanana)

fruits[1] = 'mango';
// console.log(fruits);

//b.
var removeOrange = fruits.pop();
// console.log(removeOrange);
// console.log(fruits);

var addWatermelon = fruits.push('watermelon');
// console.log(addWatermelon);
// console.log(fruits);


// //practice-2
// var score = 10;

// if( score >= 80){
//     console.log('congratulation! your got A grade.')
// }
// else if( score >= 60){
//     console.log('congratulation! your got B grade.')
// }
// else if( score >= 50){
//     console.log('congratulation! your got C grade.')
// }
// else if( score >= 40){
//     console.log('congratulation! your got D grade.')
// }
// else if( score <= 39){
//     console.log('Alas! your got F grade.')
// }

//practice-3
// //a.
// var num1= 13;
// var num2 = 79;
// var num3 = 45;

// if(num1 > num2){
//     if(num1 > num3){
//         console.log(num1, 'is the largest number')
//     }
//     else{
//         console.log(num3, 'is the largest number')
//     }
// }
// else if(num2 > num3){
//     if(num2 > num1){
//         console.log(num2, 'is the largest number')
//     }
//     else{
//         console.log(num3, 'is the largest number')
//     }
// }

//b.
var num1 = 9;
var num2 = 8;
var num3 = 9;
if(num1 == num2 || num2 == num3 || num3 == num1){
    console.log('Yes! triangle is isosceles.')
}