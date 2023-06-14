// //301compariosonarrys

function compareTriplets(a, b) {
  let alicPoint = 0;
  let boboPoint = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) alicPoint++;
    if (a[i] < b[i]) boboPoint++;
    console.log(a[i], b[i], "bob");
  }

  return [alicPoint, boboPoint];
}

function compareTriplets1(a, b) {
  let alice = 0;
  let bob = 0;
  let answer = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) alice++;
    if (a[i] < b[i]) bob++;
    console.log(a[i], b[i], "bob");
  }
  answer[0] = alice;
  answer[1] = bob;
  return answer;
}

var arr = [64, 12, 25, 12, 22, 11, 1];
var arr1 = [23, 34, 25, 23, 22, 23, 90];

let result = compareTriplets(arr, arr1);

console.log(result, "result");
