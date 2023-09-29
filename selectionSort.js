var test = [12,25,1,6,158,1,54,9,87]
function selectionSort(arr){
    for(var i = arr.length-1; i >= 0; i--){
        let max = i
        for(var j = 0; j< i;j++){
            if(arr[j] > arr[max]) max = j
        }
        [arr[i], arr[max]]=[arr[max], arr[i]];
    }
    return arr
}

console.log(selectionSort(test))