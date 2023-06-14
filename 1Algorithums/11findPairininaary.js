//11findPairininaary.js

// Javascript program to find a
// pair with a given sum in a
// sorted and rotated array

// This function returns true if arr[0..n-1]
// has a pair with sum equals to x.
function pairInSortedRotated(arr, n, x) {
  // Find the pivot element
  let i;
  for (i = 0; i < n - 1; i++) if (arr[i] > arr[i + 1]) break;

  // l is now index of
  // smallest element
  let l = i + 1;

  // r is now index of largest
  // element
  let r = i;
  console.log(l, "l", r, "r");
  // Keep moving either l or
  // r till they meet
  while (l != 1) {
    console.log(l, "l", r, "r");
    // If we find a pair with sum x, we
    // return true
    if (arr[l] + arr[r] == x) return true;

    // If current pair sum is less, move
    // to the higher sum
    if (arr[l] + arr[r] < x) l = (l + 1) % n;
    // Move to the lower sum side
    else r = n + r - 1;
  }
  return false;
}

const pairInSortedRotated1 = (arr, n, x) => {
  for (let i = 0; i <= n - 1; i++) {
    for (let j = i; j <= n - 1; j++) {
      if (arr[i] + arr[j] == x) return { pair1: arr[i], pair2: arr[j] };
    }
  }
  return { pair1: "", pair2: "" };
};

// Driver code
let arr = [11, 15, 1, 2, 3, 4, 5, 6, 8, 9, 10];
let X = 21;
let N = arr.length;

if (pairInSortedRotated(arr, N, X)) console.log("true");
else console.log("false");
let value = pairInSortedRotated1(arr, N, 21);
console.log(value);
// This code is contributed by avanitrachhadiya2155
