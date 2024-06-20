let started = true;

function insertion_sort() {
  let result = insertion_sort_alg(index, cur_ind);
  done = result[0];
  index = result[1];
  cur_ind = result[2];
  
  if (!done){
    //console.log(cur_ind, index);
    started = true;
    count++;
    index = count;
  }
  return;
}

function insertion_sort_alg(gi, ti){
  if (started) {
    ti = gi+1;
    started = false;
  } 
  ti--;
  if (list[ti] > list[gi+1]) {
    swap(gi+1, ti);
    gi--;
    return [true, gi, ti];
  }
  return [false, gi, ti];
}