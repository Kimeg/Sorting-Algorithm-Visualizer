let nComp = 0;
let done;
let count = 0;


function setup() {
  createCanvas(WIDTH, HEIGHT);
  createButtons();
}

function draw() {
  if (list.length==0){
    return;
  }
  
  let result = handle_process();
  if (!result){
    
    run_bs = false;
    run_is = false;
    run_ss = false;
    run_ms = false;
    run_qs = false;
    run_cts = false;
    run_gns = false;
    run_rs = false;
    run_hs = false;
    run_bgs = false;
    noLoop();
  }
  
  if (run_bs){ bubble_sort(); }
  else if (run_is){ insertion_sort(); }
  else if (run_ss){ selection_sort(); }
  else if (run_ms){ merge_sort(0, list.length-1, 0); }
  else if (run_qs){ quick_sort(0, list.length-1, 0); }
  else if (run_cts){ cocktail_shaker_sort(); }
  else if (run_gns){ Gnome_sort(); }
  else if (run_rs){ Radix_sort(); }
  else if (run_hs){ Heap_sort(); }
  else if (run_bgs){ Bogo_sort(); }
  
  
  draw_list(index);
  //console.log('g');
}
