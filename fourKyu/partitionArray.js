
/**
 * Partitions the given array in-place by selecting the number at the middle
 * index to use it as a "pivot" value, then arranges all numbers less than the
 * pivot to be to it's left and all larger numbers to the right of the pivot.
 * Hoare’s partitioning scheme, named for Sir Charles Anthony Richard Hoare,
 * who developed the quicksort algorithm in 1959. It does fewer swaps than
 * other schemes
 *
 * - Time: O(n) linear despite nested loops because we still don't visit an
 *    index more than once.
 * - Space: O(1) constant.
 * @see https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
 *    visualization of quickSort. Focus only on the first cycle of the visualization
 *    for the partition portion only.
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of array
 *    being processed.
 * @param {number} right The index indicating the end of the slice of array
 *    being processed.
 * @returns {number} The index where the smaller section ends.
 */
function partition(nums, leftIdx = 0, rightIdx = nums.length - 1) {
    const midIdx = Math.floor((leftIdx + rightIdx) / 2);
    const pivotValue = nums[midIdx];
    const tempPivotIdx = rightIdx;

    // Swap the pivot to the end of the section being partitioned so its
    // position can be kept track of, then move it last to its final position.
    [nums[midIdx], nums[tempPivotIdx]] = [nums[tempPivotIdx], nums[midIdx]];

    // Skip over the pivot that was moved to the end so it stays there for now.
    rightIdx = tempPivotIdx - 1;

    // Look for a num on the left and on the right that both need to be moved to
    // the other side so one swap can move both of them to the correct side.
    while (true) {
        // Move leftIdx until we find a num that is out of place.
        while (nums[leftIdx] < pivotValue) {
            leftIdx += 1;
        }

        // Move rightIdx until we find a num that is out of place.
        while (nums[rightIdx] > pivotValue) {
            rightIdx -= 1;
        }

        // All nums have been iterated over, partitioning is complete.
        if (leftIdx >= rightIdx) {
            // Swap the pivot to it's final location.
            [nums[tempPivotIdx], nums[leftIdx]] = [nums[leftIdx], nums[tempPivotIdx]];
            return leftIdx;
        }

        // Swap the two out of place nums so they will both be on the correct side.
        [nums[leftIdx], nums[rightIdx]] = [nums[rightIdx], nums[leftIdx]];

        // After swapping, we're done with this pair, move on.
        leftIdx += 1;
        rightIdx -= 1;
    }
}

function quicksort(arr, left = 0, right = arr.length - 1) {
    console.log("right and left in the quick sort fuction\n",left,right)
    if (left < right) {
        let pivot = partition(arr, left, right);
        console.log("pivot index = ",pivot, "\n pivot value = ", arr[pivot])
        //left
        quicksort(arr, left, pivot - 1);
        //right
        quicksort(arr, pivot + 1, right);
    }
    return arr;
}
console.log("the test \n", quicksort([2, 1, 5, 7, 4, 8, 9, 6, 10, 13, 15]));