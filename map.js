multiplyBy2 = (number) => {
    return number * 2;
}
function mapDemonstration(arr , afun ){
    var output = [];
    for(var i=0;i<arr.length;i++){
        output[i] = afun(arr[i]);
    }
    return output;
   
}

arr = [1,2,3,4,5];
console.log(mapDemonstration(arr,multiplyBy2));


// Using map inbuilt funtion
// const res = arr.map((number)=>{
//     return number*2;
// })
// console.log(res);