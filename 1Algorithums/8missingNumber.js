// Function to find the missing number
function findMissing(arr, N) {
  let i;
  let temp = [];
  for (i = 0; i <= N; i++) {
    temp[i] = 0;
  }
  console.log(temp);

  for (i = 0; i < N; i++) {
    temp[arr[i] - 1] = 1;
  }

  console.log(temp);

  let ans = 0;
  for (i = 0; i <= N; i++) {
    if (temp[i] == 0) ans = i + 1;
  }
  console.log(ans);
}
function getMissingNo(a, n) {
  console.log(n);
  let total = Math.floor(((n + 1) * (n + 2)) / 2);
  console.log(total, n);

  for (let i = 0; i < n; i++) {
    total -= a[i];
    console.log(total, a[i], "total");
  }
  return total;
}

function getMissingNo1(a, n) {
  let i,
    total = 1;

  for (i = 2; i <= n + 1; i++) {
    total += i;
    console.log(total, "befor========");
    total -= a[i - 2];
    console.log(total, "=========after\n");
  }
  return total;
}

function getMissingNo3(a, n) {
  // For xor of all the elements in array
  var x1 = a[0];

  // For xor of all the elements from 1 to n+1
  var x2 = 1;
  for (var i = 1; i < n; i++) {
    console.log(x1, a[i], "=====x1,a[i]====");

    x1 = x1 ^ a[i];
  }
  console.log(x1, "=====x1====final");

  for (var i = 2; i <= n + 1; i++) {
    x2 = x2 ^ i;
    console.log(x2, "=====x2====");
  }
  console.log(x2, "=====x2====final");
  return x1 ^ x2;
}

// Driver code
let arr = [1, 3, 7, 5, 6, 2];
let arr1 = [2, 3, 1, 4];

let n = arr.length;

// Function call
findMissing(arr, n);

let miss = getMissingNo(arr1, arr1.length);
console.log(miss, "vmissmiss");
let miss1 = getMissingNo1(arr1, arr1.length);
console.log(miss1, "miss1");
let miss3 = getMissingNo3(arr1, arr1.length);
console.log(miss3, "miss3");
