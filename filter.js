filterDemonstration = (arr , checkIfTheNumberIsGreaterThan2) =>{
    var output = [];
    var count = 0;
    for(var i=0;i<arr.length;i++){
        var value = checkIfTheNumberIsGreaterThan2(arr[i]);
        if(value != null){
            output[count] = value;
            count++;
        }
    }
    return output;
}
checkIfTheNumberIsGreaterThan2 = (number) => {
    if(number > 2){
        return number;
    }
    else{
        return null;
    }
}
 arr = [1,2,3,4,5];
 const res = filterDemonstration(arr,checkIfTheNumberIsGreaterThan2);
 console.log(res);



//Using Filter inbuilt function

// const res = arr.filter((number)=>
//     number>2
// );
// console.log(res);