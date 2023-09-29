function bookIndex(arr){
    var Output = "";
    for(var i = 0 ; i<arr.length; i++){
        let tempIndex = i;
        while(arr[i]+1 === arr[i+1]) i++
        if(tempIndex !== i) Output += arr[tempIndex] + "-" + arr[i] + ", "
        else Output += arr[i] + ", "
    }
    return Output.slice(0,Output.length -2);
}
console.log(bookIndex([1,3,4,5,7,8,10]))
console.log(bookIndex([1,3,4,5,7,8,10,12]))
