async function partition(l, r){
  let pivot = list[r];
  let i = l-1
  
  for (let j=l; j<r; j++){
    if (list[j] < pivot){
      i++;
      swap(i, j);
    }
  }
  swap(i+1, r);
  return i+1;
}

async function quick_sort(l, r, depth){
  if (l < r){
    let ind = await partition(l, r);

    await sleep(100);
    index = ind;
    await quick_sort(l, ind-1, depth+1);
    await quick_sort(ind+1, r, depth+1);
  }
  if (depth==0){
    index = list.length;
  }
}