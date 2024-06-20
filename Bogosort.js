async function Bogo_sort(){
  await sleep(500);
  list = await shuffle(list);
  if (is_sorted()){
    index = list.length;
  }
}

function is_sorted(){
  for (let i=0; i< list.length-1; i++){
    if (list[i] > list[i+1]){
      return false;
    }
  }
  return true;
}