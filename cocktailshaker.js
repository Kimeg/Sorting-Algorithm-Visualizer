async function cocktail_shaker_sort(){
  let swapped = true;
  while (swapped){
    swapped = false;
    
    for (let i = 0; i < list.length-1; i++){
      if (list[i] > list[i+1]){
        await sleep(10);
        await swap(i, i+1);
        index = i;
        swapped = true;
      }
    }
    
    if (!swapped){
      break;
    }
    
    swapped = false;
    
    for (let i = list.length-2; i >= 0; i--){
      if (list[i] > list[i+1]){
        await sleep(10);
        await swap(i, i+1);
        index = i;
        swapped = true;
      }
    }
    
    if (!swapped){
      break;
    }
  }
  index = list.length;
}