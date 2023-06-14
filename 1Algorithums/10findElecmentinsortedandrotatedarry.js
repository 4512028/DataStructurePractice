// node 10findElecmentinsortedandrotatedarry.js

//9findPivotPointinrotatedArry
function binarySearch(arr, low, high, key) {
  if (high < low) return -1;

  let mid = Math.floor((low + high) / 2); /*low + (high - low)/2;*/
  if (key == arr[mid]) return mid;

  if (key > arr[mid]) return binarySearch(arr, mid + 1, high, key);

  // else
  return binarySearch(arr, low, mid - 1, key);
}

const findPivotPoint = (low, high, arry) => {
  console.log(low, high, "low, high,");
  // piovot point not found  in arry
  if (low > high) return -1;
  // if low and high is equal
  if (low == high) return low;

  // find mid of arry
  let mid = Math.floor((high + low) / 2);
  // if the mid is the pooint that where right side index value  is lower then its  pivotpoint
  if (mid < high && arry[mid] > arry[mid + 1]) return mid;
  // if the mid pint is the  point where left side index value is greater thern  its pivot point
  else if (mid > low && arry[mid] < arry[mid - 1]) return mid - 1;

  // if lowr index value is greater then  medium we  will  move to left
  if (arry[low] >= arry[mid]) return findPivotPoint(low, mid - 1, arry);
  // if  higer index value is lower then medium  we will move to right
  return findPivotPoint(mid + 1, high, arry);
};

const pivotedBinarySearch = (arr, n, key) => {
  let pivot = findPivotPoint(0, n - 1, arr);

  // If we didn't find a pivot,
  // then array is not rotated at all
  if (pivot == -1) return binarySearch(arr, 0, n - 1, key);

  // If we found a pivot, then first compare with pivot
  // and then search in two subarrays around pivot
  if (arr[pivot] == key) return pivot;

  if (arr[0] <= key) return binarySearch(arr, 0, pivot - 1, key);

  return binarySearch(arr, pivot + 1, n - 1, key);
};
/* Driver program to check above functions */
// Let us search 3 in below array
let arr1 = [5, 6, 7, 8, 9, 10, 1, 2, 3];
let n = arr1.length;
let key = 3;
// Function calling
console.log("Index of the element is : " + pivotedBinarySearch(arr1, n, key));
