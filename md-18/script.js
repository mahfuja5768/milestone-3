//1.
// var i = 1;

// while(i <= 39){
//     // console.log("Ajke amar mon valo nei.");
//     i++;
// }

//2.
// for(var i = 58; i <= 98 ; i++){
//    console.log(i);
// }

// //3. even-nums
// for(var i = 412; i <= 456 ; i +=2){
//    console.log(i);
// }

// //4. odd-nums
// for(var i = 581; i <= 623 ; i += 2){
//    console.log(i);
// }


// //6.
// var topics = ['array', 'loop', 'conditions', 'if-else']
// for(var i = 0; i < topics.length ; i++){
//    var topic =  topics[i];
//    console.log(topic);
// }

//7.
// var phones = ['iphone', 'realme', 'xomi', 'google']
// var i =0 ;
// while(i < phones.length){
//    var phone =  phones[i];
//    console.log(phone);
//    i++
// }

//8.
// var  i = 30;

// while(i <= 86){
//     if(i > 44){
//         break;
//     }
//     console.log(i);
//     i++;
// }


//9.
var booksPrice = [170, 900, 422, 100, 200, 50, 555];

for(var i = 0; i < booksPrice.length; i++){
    var priceLess200 = booksPrice[i]
    if(priceLess200 > 200){
        continue;
    }
    console.log(priceLess200)
}