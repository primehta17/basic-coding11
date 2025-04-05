//Check If a Variable is of Function Type

let fun = function(){
    console.log("this is function");
}
let digit=9;

if(typeof(digit) == 'function'){
    console.log("It is function type");
}else{
    console.log("It is not function type");
}

if(fun instanceof Function){
     console.log("It is instance of function type");
}else{
    console.log("It is instance of not function type");
}