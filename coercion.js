
 //Use of typeof to know the name of datatype coercion
let num =14;
let str = "6";
//convert string to number
let numb = Number("123");
console.log(numb,typeof numb)
console.log(num,typeof num + str,typeof str);
//Number + String = String
Conv=num+str;
console.log(Conv,typeof Conv)
//Number - String = Number
Conv=num-str;
console.log(Conv,typeof Conv)
//Booleans
//number 0  ,undefined or NaN are  always false in boolean
console.log(Boolean(NaN));
console.log(Boolean(2));

//convert string to number using parseInt.It will the covert the first number in the string
let x= parseInt("123 Dave");
console.log(x);