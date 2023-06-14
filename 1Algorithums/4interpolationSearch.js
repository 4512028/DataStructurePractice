const interpolationSearch = (arry, lo, hi, x) => {
  console.log(hi >= lo && arry[hi] >= x && arry[lo] <= x);
  let pos;

  if (hi >= lo && arry[hi] >= x && arry[lo] <= x) {
    pos = parseInt(lo + ((hi - lo) / (arry[hi] - arry[lo])) * (x - arry[lo]));
    console.log(pos, "poss");
    if (arry[pos] == x) {
      return pos;
    }
    if (arry[pos] > x) {
      let result = interpolationSearch(arry, lo, pos - 1, x);
      return result;
    } else if (arry[pos] < x) {
      let result = interpolationSearch(arry, pos + 1, hi, x);
      return result;
    }
  }
  return -1;
};

function main() {
  let arr = [10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47];

  let n = arr.length;

  // Element to be searched
  let x = 35;
  let index = interpolationSearch(arr, 0, n - 1, x);

  // If element was found
  if (index != -1) {
    console.log(`Element found at index ${index}`);
  } else {
    console.log("Element not found");
  }
}
main();
