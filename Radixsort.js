// A utility function to get maximum value in arr[] 
function getMax() {
  let n = list.length;
  let mx = list[0];
  for (let i = 1; i < n; i++){
    if (list[i] > mx){
      mx = list[i];
    }
  }
  return mx;
}

// A function to do counting sort of arr[] according to 
// the digit represented by exp. 
async function countSort(e) {
  let n = list.length;
  let output = Array(n).fill(0);
  let count = Array(10).fill(0);
  
  // Store count of occurrences in count[] 
  for (let i = 0; i < n; i++){
    count[(list[i] / e) % 10]++;
  }

  // Change count[i] so that count[i] now contains 
  // actual position of this digit in output[] 
  for (let i = 1; i < 10; i++){
    count[i] += count[i - 1];
  }
  

  // Build the output array 
  for (let i = n - 1; i >= 0; i--) {
    output[count[(list[i] / e) % 10] - 1] = list[i];
    count[(list[i] / e) % 10]--;
  }

  // Copy the output array to arr[], so that arr[] now 
  // contains sorted numbers according to curent digit 
  for (let i = 0; i < n; i++){
    list[i] = output[i];
  }
}

// The main function to that sorts arr[] of size n using 
// Radix Sort 
async function Radix_sort() {
  // Find the maximum number to know number of digits 
  let m = getMax();

  // Do counting sort for every digit. Note that instead 
  // of passing digit number, exp is passed. exp is 10^i 
  // where i is current digit number 
  for (let e = 1; m / e > 0; e *= 10){
    await sleep(20);
    await countSort(e);
  }
}
