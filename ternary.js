//Find number is even or odd
 let num = prompt("Enter a number");
 let result;
 if(num%2 ===0){
        result="even";
        console.log("Number is "  + result)
 }
 else{
     result="odd";
     console.log("Number is " + result)
    }
                  //OR
    //using ?:
    result = num%2 === 0 ? "even" : "odd";
    console.log(result);