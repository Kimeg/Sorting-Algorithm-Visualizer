let sorted = true;

function bubble_sort(){
  if (list[index-1] > list[index]){
    sorted = false;
    swap(index-1, index);
  }
  index++;
  return;
}