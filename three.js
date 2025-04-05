// JavaScript Program to Pass a Function as Parameter

function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}

function operation(equation){
  return equation(5,3);
}
console.log(operation(sum));
console.log(operation(sub));