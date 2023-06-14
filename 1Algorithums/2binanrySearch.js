function binarySearch(arr, l, r, x) {
  if (r >= l) {
    let mid = l + Math.floor((r - l) / 2);

    // If the element is present at the middle
    // itself
    if (arr[mid] == x) return mid;

    // If element is smaller than mid, then
    // it can only be present in left subarray
    if (arr[mid] > x) return binarySearch(arr, l, mid - 1, x);

    // Else the element can only be present
    // in right subarray
    return binarySearch(arr, mid + 1, r, x);
  }

  // We reach here when element is not
  // present in array
  return -1;
}
function main() {
  let arryOfInteger = [1, 23, 45, 56, 93, 111, 123, 132];

  let resultRecusrive = binarySearch(
    arryOfInteger,
    0,
    arryOfInteger.length - 1,
    -1
  );
  console.log(resultRecusrive, "resultRecusrive result ");
}
main();
