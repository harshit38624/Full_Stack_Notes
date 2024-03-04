// //one way of comment
// /*another way of comment*/
// var l = "hello";
// var l;
// //no problem with redeclaring
// /*var -> it was used in older browser.
//         So, if you want to make website compatible with older browser use this
//         also it doesn't have block scope*/
// {
//     var c = "he";
// } 
// console.log(c);
// //work perfectly 

// let k = "hello"
// let k;
// //problem with redeclaring 

// {
//     let ca = "shit";
// }
// console.log(ca);

// //hoisting in var
// hell = "hell"
// var hell;
// console.log(hell);

// //not allowed in let
// hell_1="hell";
// let hell_1;
// console.log(hell_1);

// var ca;
// {let ca;}
// //working fine

// let c_1;
// {
//     var c_1;
// }
// //error

// const car = ["toyota","hello"];
// car[0]="dslajfl;ja";
// car.push("hell");
// //can add or change properties when using const
// car = ["kadhfsk","akd"];
// //cant reassign it 

// const vara = {
//     name:"harshit",
//     roll:86
// }
// vara['name']="harshit behal";
// console.log(vara);

// vara = {
//     name:"akjdfh"
// }
//same with object