const partition = (arr, left = 0, right = arr.length - 1) => {

    console.log("original array", arr);

    const pivot = Math.floor((left + right / 2));

    console.log("middel value", arr[pivot], "end value", arr[right]);

    [arr[right], arr[pivot]] = [arr[pivot], arr[right]]

    console.log("array after pivot moved to back \n",arr);

    let i = left, j = right - 1;
    const pivotValueIdx = arr.length - 1
    while (true) {
        while (arr[i] < arr[pivotValueIdx]) {

            console.log("compairing I and pivotValue\n", arr[i], arr[pivotValueIdx]);

            i++
        }
        while (arr[j] > arr[pivotValueIdx]) {
            console.log("compairing J and pivotValue\n", arr[j], arr[pivotValueIdx]);

            j--
        }
        console.log("I and j: \n",arr[i], arr[j]);

        if (i >= j) {
            console.log("about to exit and put pivot back , array before exit swap\n", arr );

            [arr[pivotValueIdx], arr[i]] = [arr[i], arr[pivotValueIdx]]

            console.log("array after swap and before exit,\n", arr)
            break;
        }
        console.log("making swap arr before swap \n", arr);

        [arr[j], arr[i]] = [arr[i], arr[j]]

        i++
        j--
        console.log("after swap \n", arr, "\n value of i and j \n", arr[i], arr[j]);
    }
    return i
}




function quicksort(arr, left = 0, right = arr.length - 1) {
    console.log("right and left in the quick sort fuction\n",left,right)
    if (left < right) {
        let pivot = partition(arr, left, right);
        //left
        quicksort(arr, left, pivot-1);
        //right
        quicksort(arr, pivot + 1, right);
    }
    return arr;
}
console.log("the test \n", quicksort([2, 1, 5, 7, 4, 8, 9, 6, 10, 13, 15]));