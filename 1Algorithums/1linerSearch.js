const leanerSearch = (leanerSearch, number) => {
  let right = leanerSearch.length - 1;
  for (let i = 0; i < leanerSearch.length - 1; i++) {
    if (leanerSearch[i] == number) {
      return i;
    } else if (leanerSearch[right] == number) {
      return right;
    } else if (right <= i) {
      return -1;
    }
    right -= 1;
    console.log(right, i, "result");
  }
};

const recursiveLiner = (arre, index, number) => {
  if (arre.length - index - 1 <= index) {
    return -1;
  } else if (arre[index] == number) {
    return index;
  } else if (arre[arre.length - index - 1] == number) {
    return arre.length - index - 1;
  } else {
    console.log(arre, index, number);

    let result = recursiveLiner(arre, index + 1, number);
    return result;
  }
};

function main() {
  let arryOfInteger = [1, 23, 12, 34, 12345, 43, 1, 2];
  let result = leanerSearch(arryOfInteger, 14);
  console.log(result, "leanerSearch result ");
  let resultRecusrive = recursiveLiner(arryOfInteger, 0, 23);
  console.log(resultRecusrive, "resultRecusrive result ");
}
main();
