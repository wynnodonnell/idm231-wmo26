let heroObj = document.getElementById('hero');
let randObj = document.getElementsById('rand');
let perrinObj = document.getElementById('perrin');
let matObj = document.getElementById('mat');



randObj.addEventListener('click',function(){
  console.log('hello')
  swapInfo(1);
},false);

perrinObj.addEventListener('click',function(){
  swapInfo(2);
},false);

matObj.addEventListener('click',function(){
  swapInfo(3);
},false);

function swapInfo(whichOne){
  console.log('swap info called' + whichOne);
  if (whichOne == 1){
    heroObj.scr = 'images/rand320.jpg';
  }
  else if(whichOne == 2){
    heroObj.src = 'images/perrin320.jpg';
  }
  else if(whichOne == 3){
    heroObj.src = 'images/mat320.jpg';
  }
  else{
    console.log ('error in swapinfo');
  }

}