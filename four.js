//Check if a Number is Float or Integer

let num=97.4;

if(typeof(num)=='number' && !isNaN(num)){
    if(Number.isInteger(num)){
        console.log("number is integer ",num);
    }else{
        console.log("number is float value ",num);
    }
   
}else{
    console.log("number is float");
}