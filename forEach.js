printValues = (number,index) => {
    console.log("Index is "+index+" Value is "+number);
}
function forEachDemonstration(arr , callback ){
    for(var i=0;i<arr.length;i++){
        callback(arr[i],i);
    }
    return;
   
}

arr = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
forEachDemonstration(arr,printValues);

//Using forEach Inbuilt function
// arr.forEach((value , index) =>{
//     console.log("Index is "+index+" Value is "+value);
// })           