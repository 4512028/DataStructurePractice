//9findPivotPointinrotatedArry

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
  let pivotPoint = findPivotPoint(0, n - 1, arr);
  console.log(pivotPoint, "pivotPoint");
};
/* Driver program to check above functions */
// Let us search 3 in below array
let arr1 = [3, 5, 6, 7, 8, 9, 10, 1, 2];
let n = arr1.length;
let key = 3;
// Function calling
console.log("Index of the element is : " + pivotedBinarySearch(arr1, n, key));
