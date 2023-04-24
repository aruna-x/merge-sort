// merge 2 sorted arrays, only ever have to compare the first two elements of each 
// can implement merge recursively as well :)
function merge(a1, a2) {

  // RECURSIVE
  switch (true) {
    case (a1.length === 0):
      return a2;
    case (a2.length === 0):
      return a1;
    case (a1[0] < a2[0]):
      return [a1[0], ...merge(a1.slice(1),a2)];
    case (a1[0] >= a2[0]):
      return [a2[0], ...merge(a2.slice(1),a1)];

  }

  // ITERATIVE

  // const res = [];
  // let p1 = 0, p2 = 0;

  // while (a1[p1] && a2[p2]) {
  //   if (a1[p1] < a2[p2]) {
  //     res.push(a1[p1]);
  //     p1++;
  //   }
  //   else if (a1[p1] >= a2[p2]) {
  //     res.push(a2[p2]);
  //     p2++;
  //   }
  // }

  // if (a1[p1]) {
  //   return [...res, ...a1.slice(p1)]
  // }
  // else if (a2[p2]) {
  //   return [...res, ...a2.slice(p2)]
  // }
  // return res;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  else {
    const len = arr.length;
    const half = Math.floor(len/2);
    return merge(mergeSort(arr.slice(0,half)), mergeSort(arr.slice(half)));
  }
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
 * 
 */
