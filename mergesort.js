async function merge(l, m, r) {
  // Find sizes of two subarrays to be merged 
  n1 = m - l + 1;
  n2 = r - m;

  /* Create temp arrays */
  let L = [];
  let R = [];

  /*Copy data to temp arrays*/
  for (let i = 0; i < n1; ++i)
    L[i] = list[l + i];
  for (let j = 0; j < n2; ++j)
    R[j] = list[m + 1 + j];


  /* Merge the temp arrays */

  // Initial indexes of first and second subarrays 
  let i = 0;
  let j = 0;

  // Initial index of merged subarry array 
  let k = l;
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      list[k] = L[i];
      i++;
    } else {
      list[k] = R[j];
      j++;
    }
    k++;
    index = k;
  }

  /* Copy remaining elements of L[] if any */
  while (i < n1) {
    list[k] = L[i];
    i++;
    k++;
  }

  /* Copy remaining elements of R[] if any */
  while (j < n2) {
    list[k] = R[j];
    j++;
    k++;
  }
}

// Main function that sorts arr[l..r] using 
// merge() 
async function merge_sort(l, r, depth) {
  if (l < r) {
    // Find the middle point 
    var m = parseInt((l + r) / 2);
    
    // Sort first and second halves 
    await merge_sort(l, m, depth+1);
    await merge_sort(m + 1, r, depth+1);

    // Merge the sorted halves 
    await sleep(30);
    await merge(l, m, r);
  }  
  if (depth==0){
    index = list.length;
  }
}


