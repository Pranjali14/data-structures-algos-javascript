function mergeSort(arr, start, end) {
  const mid = Math.ceil((start + end) / 2);
  if (arr.length == 1) {
    return arr;
  }
  let arr1 = mergeSort(arr, 0, mid);
  let arr2 = mergeSort(arr, mid + 1, end);
  merge(arr1, arr2);
  console.log(arr);
}

function merge(arr1, arr2) {
  let temp = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      temp.push(arr1[i]);
      i++;
    } else {
      temp.push(arr2[j]);
      j++;
    }
  }
  if (i == arr1.length) {
    while (j < arr2.length) {
      temp.push(arr2[j++]);
    }
  } else if (j == arr2.length) {
    while (i < arr1.length) {
      temp.push(arr1[i++]);
    }
  }
  return temp;
}

console.log(mergeSort([1, 5, 8, 2, 3, 4, 9]));

//mergeSort([2, 3, 1], 0);
