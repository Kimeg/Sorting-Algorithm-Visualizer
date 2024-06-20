function selection_sort(){
  let min_ind = index-1;
  for (let i=index; i<list.length; i++){
    if (list[min_ind] > list[i]){
      min_ind = i;
    }
  }
  swap(min_ind, index-1);
  index++;
}