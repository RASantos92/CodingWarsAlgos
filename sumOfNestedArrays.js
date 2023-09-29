var test = [1,2,3,4,5,9,[1]]

function sumOfNestedArrays(arr, i = 0, sum = arr[0]){
    console.log(arr[i], sum)
    if(Array.isArray(arr[i])){
        console.log("here",sum)
        return sumOfNestedArrays(arr[i],i=0,sum)
    } 
    if(!arr[i+1]){
        return sum
    } 
    console.log("there",arr[i])
    i++
    return sumOfNestedArrays(arr,i = i+1,sum=sum+arr[i])
}

console.log(sumOfNestedArrays(test))


var test1 = "1?0?"

function binaryStringExpansion(str, solutions = [], partial = "") {
    // finding the index of the ?
    const index = str.indexOf("?");
  
    if (index < 0) {
        console.log( "line 27", partial, str)
      solutions.push(partial + str);
    } else {
      // slice from the beginning of the string to the ?
      const front = str.slice(0, index);
      console.log("line 31",front)
      // slice from the ? to the end of the string
      const back = str.slice(index + 1);
      console.log("line 35",back)
      const prefix = partial + front;
      console.log("line 37",prefix)
      binaryStringExpansion(back, solutions, prefix + "0");
      binaryStringExpansion(back, solutions, prefix + "1");
    }
    return solutions;
  }
 console.log(binaryStringExpansion(test1))