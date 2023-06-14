//306Programforarrayrotation
// ================================================HELPER Function

function swap(arr, start, end) {
  var temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
}

function reverseArray(arr, start, end) {
  while (start < end) {
    swap(arr, start, end);
    start++;
    end--;
  }
}

// ====================================================
//  Approach 1 (Using temp array):

function approch1(arr, n, d) {
  let temp = [arr.length];
  let k = 0;
  for (let i = d; i < n; i++) {
    temp[k] = arr[i];
    k++;
  }
  for (let i = 0; i < d; i++) {
    temp[k] = arr[i];
    k++;
  }

  for (let i = 0; i < n; i++) {
    arr[i] = temp[i];
  }
}
// =================================================================
// Approach 2 (Rotate one by one)

function approach2(arr, n, d) {
  let p = 1;
  while (d >= p) {
    let last = arr[0];
    for (let i = 0; i < n - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr[n - 1] = last;
    p++;
  }
}
// ========================================================
// Approach 3 (A Juggling Algorithm):
/*Function to get gcd of a and b*/
function gcd(a, b) {
  if (b == 0) return a;
  else return gcd(b, a % b);
}
function approach3(arr, n, d) {
  /*Function to left rotate arr[] of siz n by d*/

  /* To handle if d >= n */
  d = d % n;
  console.log(d, "distance rotation");
  let g_c_d = gcd(d, n);
  console.log(g_c_d, "g_c_d rotation");

  for (let i = 0; i < g_c_d; i++) {
    /* move i-th values of blocks */
    let temp = arr[i];
    let j = i;

    while (1) {
      let k = j + d;
      console.log(k, j, d, "k , j , d");

      if (k >= n) k = k - n;

      if (k == i) break;

      arr[j] = arr[k];
      j = k;
    }
    arr[j] = temp;
  }
}

// =======================================================
//Approach 4 Reversal algorithm for Array rotation
function approach4(arr, n, d) {
  if (d == 0) return;
  // in case the rotating factor is
  // greater than array length
  d = d % n;

  reverseArray(arr, 0, d - 1);
  reverseArray(arr, d, n - 1);
  reverseArray(arr, 0, n - 1);
}
// =========================================================
// Approach 5 Block swap algorithm for array rotation

let approachleftRotate5 = (arr, d, n) => {
  /* Return If number of elements to be rotated 
    is zero or equal to array size */
  if (d == 0 || d == n) return;

  /*If number of elements to be rotated
    is exactly half of array size */
  if (n - d == d) {
    arr = swapApproach5(arr, 0, n - d, d);
    return;
  }
  console.log(d, n - d, "ks ");
  /* If A is shorter*/
  if (d < n - d) {
    console.log("note ned to  run");
    arr = swapApproach5(arr, 0, n - d, d);
    approachleftRotate5(arr, d, n - d);
  } else {
    /* If B is shorter*/
    arr = swapApproach5(arr, 0, d, n - d);
    /*This is tricky*/
    approachleftRotate5(arr + n - d, 2 * d - n, d);
  }
};

/*This function swaps d elements
starting at index fi
with d elements starting at index si */
let swapApproach5 = (arr, fi, si, d) => {
  for (let i = 0; i < d; i++) {
    let temp = arr[fi + i];
    arr[fi + i] = arr[si + i];
    arr[si + i] = temp;
  }
  return arr;
};

// =========================================================
/* Utility function to print array arr[] */
function printArray(arr, arr_size) {
  let i;
  for (i = 0; i < arr_size; i++) {
    console.log(arr[i] + " ");
  }
  console.log("<br>");
}
/*Driver function to check for above functions*/
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let rotationlength = 6;
// =========================================================  Approach 1 (Using temp array):
// approch1(arr, arr.length, rotationlength);
// =========================================================Approach 2 (Rotate one by one)
// approach2(arr, arr.length, rotationlength);
// ========================================================= Approach 3 (A Juggling Algorithm):
// approach3(arr, arr.length, rotationlength);
// =========================================================Approach 4 Reversal algorithm for Array rotation
// approach4(arr, arr.length, rotationlength);
// =========================================================Approach 5  Block swap algorithm for array rotation
approachleftRotate5(arr, rotationlength, arr.length);

printArray(arr, arr.length);
