//103RecursiveBubbleSort.js

// A function to implement
// bubble sort
function bubbleSort(arr, n) {
  // Base case
  if (n == 1) return;

  var count = 0;
  // One pass of bubble
  // sort. After this pass,
  // the largest element
  // is moved (or bubbled)
  // to end.

  for (var i = 0; i < n - 1; i++)
    if (arr[i] > arr[i + 1]) {
      // swap arr[i], arr[i+1]
      var temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      count++;
    }

  // Check if any recursion happens or not
  // If any recursion is not happen then return
  if (count == 0) return;

  // Largest element is fixed,
  // recur for remaining array
  bubbleSort(arr, n - 1);
}

// Driver code

var arr = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(arr, arr.length);
console.log("Sorted array : " + "<br>");
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i] + " ");
}
