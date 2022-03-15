
 //Use of typeof to know th name of datatype coercion
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