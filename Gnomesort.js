async function Gnome_sort(){
  let ind = 0;
  
  while (ind < list.length){
    index = ind;
    if (ind==0 || list[ind]>=list[ind-1]){
      ind++;
    }else{
      await sleep(5);
      await swap(ind, ind-1);
      ind--;
    }
  }
  index = list.length;
}