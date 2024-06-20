async function Heap_sort() {
  let n = list.length;

  // Build heap (rearrange array) 
  for (let i = n / 2 - 1; i >= 0; i--){
    await sleep(2);
    await heapify(n, i);
  }

  // One by one extract an element from heap 
  for (let i = n - 1; i > 0; i--) {
    // Move current root to end 
    swap(0, i);

    // call max heapify on the reduced heap 
    await sleep(2);
    await heapify(i, 0);
  }
}

// To heapify a subtree rooted with node i which is 
// an index in arr[]. n is size of heap 
async function heapify(n, i) {
  let largest = i; // Initialize largest as root 
  let l = 2 * i + 1; // left = 2*i + 1 
  let r = 2 * i + 2; // right = 2*i + 2 

  // If left child is larger than root 
  if (l < n && list[l] > list[largest]){
    largest = l;
  }

  // If right child is larger than largest so far 
  if (r < n && list[r] > list[largest]){
    largest = r;
  }

  // If largest is not root 
  if (largest != i) {
    swap(i, largest);

    // Recursively heapify the affected sub-tree 
    await sleep(20);
    await heapify(n, largest);
  }
}