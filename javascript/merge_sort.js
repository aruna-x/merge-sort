function merge(arr1, arr2) {
  if (arr2.length === 0) {
    return arr1;
  }
  else if (arr1.length === 0) {
    return arr2;
  }
  else if (arr1[0] < arr2[0]) {
    return [arr1.shift(), ...merge(arr1, arr2)];
  }
  else if (arr1[0] >= arr2[0]){
    return [arr2.shift(), ...merge(arr1, arr2)];
  }
}

function mergeSort(arr) {
  return arr.length === 1 ? arr : merge(mergeSort(arr.splice(Math.ceil(arr.length/2))), mergeSort(arr));
}

if (require.main === module) {
  console.log("Expecting: [1, 2]");
  console.log("=>", mergeSort([2, 1]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", mergeSort([1, 2, 3]));

  console.log("");

  console.log("Expecting: [-10, 0, 2, 2, 5, 10, 20]");
  console.log("=>", mergeSort([10, -10, 0, 2, 20, 5, 2]));
}

module.exports = mergeSort;

/**
 * 1. paraphrase
 * 
 * implement merge sort:
 *   - splits all elements into smallest pieces
 *   - merges pairs from the bottom all the way upward
 * 
 * 2. tests ?
 * 3. pseudocode
 * 
 * mergeSort:
 *  - base case: if arr length === 1, then return the array itself.
 *  - if > 1, split arr in half (Math.ceil(arr.length/2))
 *  - call merge sort on the halves... merge the spread of both?
 *
 * merge: 
 *  - base case: if one arr is length 0, then just return the other array
 *  - else compare the first two elements of each array
 *  - keep the smaller one, and call merge on the remaining of that array and the other array
 * 
 * 4. code
 * 5. refactor
 * 6. optimize if time
 */
