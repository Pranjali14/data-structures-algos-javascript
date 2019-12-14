//expects array to be sorted.

function binarySearch(elem, arr, start, end) {
  if(start > end) {
    return -1;
  }
  const mid = Math.ceil((start + end) / 2);
  if (arr[mid] == elem) {
    console.log("needle found ", arr[mid], "at index : ", mid);
    return mid;
  }

  if (arr[mid] > elem) {
    return binarySearch(elem, arr, start, mid - 1);
  } else if (arr[mid] < elem) {
    return binarySearch(elem, arr, mid + 1, end);
  }
}

const hayStack = [1, 2, 3, 5, 6, 7, 10];
binarySearch(5, hayStack, 0, hayStack.length);
