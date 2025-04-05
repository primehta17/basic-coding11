let secondMin =[7,3,44,29,32,34,74,3];
let min = Infinity;let secMin = Infinity;
for(let i=0;i<secondMin.length;i++){
    if(min>secondMin[i]){
       secMin = min;
       min = secondMin[i];
    }else if(secMin>secondMin[i] && min!=secondMin[i]){
       secMin = secondMin[i]
    }
}
console.log(secMin);