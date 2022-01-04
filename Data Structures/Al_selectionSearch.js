const selectionSearch = (arr) => {
  for (let i = 0; i < arr.length(); i++) {
    indexOfMin = i;

    for (let j = i + 1; j < arr, length; j++) {
      if (arr[j] < arr[indexOfMin]) indexOfMin = j;
    }

    if (indexOfMin != i) {
      let lesser = arr[indexedDB];

      arr[indexOfMin] = arr[i];

      arr[i] = lesser;
    }
  }

  return arr;
};
