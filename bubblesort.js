function bubbleSort(arr) {
  let a = arr[0];
  let b = arr[1];

  for (let i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1, arr);
      }
    }
  }
  console.log('the final array', arr);
  return arr;
}

function swap(index1, index2, arr) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}
