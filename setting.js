let N = 200;
let list = [];
let WIDTH = 400;
let HEIGHT = 400;
let w = null;

let run_bs = false;
let run_is = false;
let run_ss = false;
let run_ms = false;
let run_qs = false;
let run_cts = false;
let run_gns = false;
let run_rs = false;
let run_hs = false;
let run_bgs = false;


let index = 0;
let offset = 0;
let cur_ind;

var bs_btn;
var is_btn;
var ss_btn;
var ms_btn;
var qs_btn;
var cts_btn;
var gns_btn;
var rs_btn;
var hs_btn;
var bgs_btn;


function createButtons(){
  var bs_btn = document.createElement("BUTTON");
  bs_btn.innerHTML = "Bubble Sort";                   
  document.body.appendChild(bs_btn); 
  bs_btn.onclick = function(){initialize(); run_bs = true};

  var is_btn = document.createElement("BUTTON");
  is_btn.innerHTML = "Insertion Sort";                   
  document.body.appendChild(is_btn); 
  is_btn.onclick = function(){initialize(); run_is = true};

  var ss_btn = document.createElement("BUTTON");
  ss_btn.innerHTML = "Selection Sort";                   
  document.body.appendChild(ss_btn); 
  ss_btn.onclick = function(){initialize(); run_ss = true};
  
  var ms_btn = document.createElement("BUTTON");
  ms_btn.innerHTML = "Merge Sort";                   
  document.body.appendChild(ms_btn); 
  ms_btn.onclick = function(){initialize(); run_ms = true};
  
  var qs_btn = document.createElement("BUTTON");
  qs_btn.innerHTML = "Quick Sort";                   
  document.body.appendChild(qs_btn); 
  qs_btn.onclick = function(){initialize(); run_qs = true};
  
  var cts_btn = document.createElement("BUTTON");
  cts_btn.innerHTML = "Cocktail Shaker Sort";                   
  document.body.appendChild(cts_btn); 
  cts_btn.onclick = function(){initialize(); run_cts = true};
  
  var gns_btn = document.createElement("BUTTON");
  gns_btn.innerHTML = "Gnome Sort";                   
  document.body.appendChild(gns_btn); 
  gns_btn.onclick = function(){initialize(); run_gns = true};
  
  var rs_btn = document.createElement("BUTTON");
  rs_btn.innerHTML = "Radix Sort";                   
  document.body.appendChild(rs_btn); 
  rs_btn.onclick = function(){initialize(); run_rs = true};
  
  var hs_btn = document.createElement("BUTTON");
  hs_btn.innerHTML = "Heap Sort";                   
  document.body.appendChild(hs_btn); 
  hs_btn.onclick = function(){initialize(); run_hs = true};
  
  var bgs_btn = document.createElement("BUTTON");
  bgs_btn.innerHTML = "Bogo Sort";                   
  document.body.appendChild(bgs_btn); 
  bgs_btn.onclick = function(){initialize(); run_bgs = true};
}


function genList(){
  for (let i=1; i<=N; i++){
    list.push(i);
  }
  
  list = shuffle(list);
  w = parseInt(WIDTH/list.length);
}

function draw_list(gi){
  background(0);

  for (let i=0; i<list.length;i++){
    let c = 255;
    if (i==gi){
      c = color(0,255,0);
    }
    fill(c);
    rect(i*w, HEIGHT*(1-(list[i]/N)), w, HEIGHT*list[i]/N);
  }
}

function initialize(){
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
  
  sorted = true;
  started = true;
  
  list = [];
  w = null;

  index = 0;
  cur_ind;
  nComp = 0;
  done = null;
  count = 0;
  offset = 0;
  
  genList();
  loop();
}

function handle_process(){
  if (index == list.length-offset){
    nComp += index;
    
    if (!sorted){
      index = 0;
      
      if (run_bs){
        offset++;
      }
      sorted = true;
      return true;
    }else{
      console.log(nComp);
      return false;
    }
  }
  return true;
}

function swap(i, j){
  let temp = list[i];
  list[i] = list[j];
  list[j] = temp;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}