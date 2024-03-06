// //This will be overwritten by below function 
// function fun(){
//     let carName = "Lamborghini";
//     return carName;
// }

// let car = fun();
// console.log(car);

// function fun(a){
//     return 3.14*a;
// }
// console.log(fun(2))

const person = {
    name:"harshit",
    roll_no:386,
    fun:function(){
        return this.name + this.roll_no;
    }
}

console.log(person.fun);

let str=`hello 'my' "brother"`;// `` can be used to enclose the '' "" in the string 
console.log(str.length);

// str = "hello "me" handsome";//this will give error
str = "hello \"me \"";//use \ to use with "" , ''
console.log(str);

str = new String("harshit");
str_2 = "harshit";
console.log(typeof str);
console.log(str==str_2);//compare the value 
console.log(str===str_2);//first compare datatype then value
str_2 = new String("harshit");
console.log(str===str_2);//two object will give false no matter what


console.log(str.charAt(1));
console.log(str.charAt(1));
console.log(str[1]);
console.log(str.charCodeAt(1));
console.log(str.slice(2));
console.log(str.slice(0,2));//parameter: start and end point 
console.log(str.slice(-6,-2))//iterate from end
console.log(str.substring(2,5));
console.log(str.substr(2,2));//first parameter mean start point and second parameter mean length to be extracted
console.log(str.substr(-4,2));
console.log(str.substr(1,2));