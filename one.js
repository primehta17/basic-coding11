let secondMaxArr= [3,44,901,55,33,4,77,99];
let max = -1; let secMax = -1;
for(let i=0;i<secondMaxArr.length;i++){
    if(max<secondMaxArr[i]){
        secMax=max;  
        max = secondMaxArr[i];  
    }
    else if(secMax<secondMaxArr[i]){
         secMax = secondMaxArr[i];
    }
}
console.log(secMax);