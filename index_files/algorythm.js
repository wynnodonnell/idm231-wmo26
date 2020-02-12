//My first lines of function code
let zodDateObj = document.getElementById('zodDate');
let showmeObj = document.getElementById('showme');
let heroObj = document.getElementById('hero');
let herotextObj = document.getElementById('herotext')
let randObj = document.getElementById('rand');
let perrinObj = document.getElementById('perrin');
let matObj = document.getElementById('mat');
let egweneObj = document.getElementById('egwene');
let minObj = document.getElementById('min');
let nynaeveObj = document.getElementById('nynaeve');
let elayneObj = document.getElementById('elayne');
let lanObj = document.getElementById('lan');
let moiraineObj = document.getElementById('moiraine');
let loialObj = document.getElementById('loial');
let aviendhaObj = document.getElementById('aviendha');
let faileObj = document.getElementById('faile');





randObj.addEventListener('click',function(){
  swapInfo(1);
},false);

perrinObj.addEventListener('click',function(){
  swapInfo(2);
},false);

matObj.addEventListener('click',function(){
  swapInfo(3);
},false);

egweneObj.addEventListener('click',function(){
  swapInfo(4);
},false);

minObj.addEventListener('click',function(){
  swapInfo(5);
},false);

nynaeveObj.addEventListener('click',function(){
  swapInfo(6);
},false);

elayneObj.addEventListener('click',function(){
  swapInfo(7);
},false);

lanObj.addEventListener('click',function(){
  swapInfo(8);
},false);

moiraineObj.addEventListener('click',function(){
  swapInfo(9);
},false);

loialObj.addEventListener('click',function(){
  swapInfo(10);
},false);

aviendhaObj.addEventListener('click',function(){
  swapInfo(11);
},false);

faileObj.addEventListener('click',function(){
  swapInfo(12);
},false);

function swapInfo(whichOne){
  console.log('swap info called ' + whichOne);
  if(whichOne == 1){
    heroObj.src = './images/rand320.jpg';
    herotextObj.innerHTML ='Rand Al Thor is';
    showmeObj.innerHTML = "Rand Al'thor 12/22-1/19";
  }
  else if(whichOne == 2){
    heroObj.src = './images/perrin320.jpg';
    herotextObj.innerHTML ='Perrin Aybarra is';
    showmeObj.innerHTML = "Parrin Aybarra 11/22-12/21";
  }
  else if(whichOne == 3){
    heroObj.src = './images/mat320.jpg';
    herotextObj.innerHTML ='Matrim Cauthon is';
    showmeObj.innerHTML = "Matrim Cauthon 1/20-2/18";
  }
  else if(whichOne == 4){
    heroObj.src = './images/egwene320.jpg';
    herotextObj.innerHTML ='Egwene Alvir is';
    showmeObj.innerHTML = "Eguane Alvir 9/23-10/23";
  }
  else if(whichOne == 5){
    heroObj.src = './images/min320.jpg';
    herotextObj.innerHTML ='Elmindreda Farshaw is';
    showmeObj.innerHTML = "Elmindreda Farshaw 4/20-5/20";
  }
  else if(whichOne == 6){
    heroObj.src = './images/nynaeve320.jpg';
    herotextObj.innerHTML ='Nyneave Al Mira is';
    showmeObj.innerHTML = "Nyneave Al Mira 10/24-11/21";
  }
  else if(whichOne == 7){
    heroObj.src = './images/elayne320.jpg';
    herotextObj.innerHTML ='Elayne Trakand is';
    showmeObj.innerHTML = "Elayne Trakand 8/23-9/22";
  }
  else if(whichOne == 8){
    heroObj.src = './images/lan320.jpg';
    herotextObj.innerHTML ='Aulan Mandraguran is';
    showmeObj.innerHTML = "al'Lan Mandragoran 6/22-7/22";
  }
  else if(whichOne == 9){
    heroObj.src = './images/moiraine320.jpg';
    herotextObj.innerHTML ='Moiraine Damodred is';
    showmeObj.innerHTML = "Moiraine Damodred 7/23-8/22";
  }
  else if(whichOne == 10){
    heroObj.src = './images/loial320.jpg';
    herotextObj.innerHTML ='Loial is';
    showmeObj.innerHTML = "Loial 2/19-3/20";
  }
  else if(whichOne == 11){
    heroObj.src = './images/aviendha320.jpg';
    herotextObj.innerHTML ='Aviendha is';
    showmeObj.innerHTML = "Aviendha 5/21-6/21";
  }
  else if(whichOne == 12){
    heroObj.src = './images/faile320.jpg';
    herotextObj.innerHTML ='Faile Bashere is';
    showmeObj.innerHTML = "Faile Bashere 3/21-4/19";
  }
  else{
    console.log ('error in swapinfo');
  }
}

function computeZod(){
    console.log('computeZod called!');
    let userBday = zodDateObj.value;
    console.log('userBday is ' + userBday);
    let monthStr = userBday.substr(5,2)
    let dayStr = userBday.substr(8,2);
    //convert str to number
    let monthNum = parseInt(monthStr);
    let dayNum = parseInt(dayStr);

    console.log('monthNum = ' + monthNum)
    console.log('dayNum = ' + dayNum)
    if (isNaN(monthNum)){
        console.log('Invalid Month')
    }

    showmeObj.innerHTML = dateToZodiac(monthNum,dayNum);
    if(AstroSign == "Rand Al'thor 12/22-1/19"){
      console.log('rand')
      heroObj.src = './images/rand320.jpg';
      herotextObj.innerHTML ='Rand Al Thor is'
    }
    if(AstroSign == "Parrin Aybarra 11/22-12/21"){
      console.log('perrin')
      heroObj.src = './images/perrin320.jpg';
      herotextObj.innerHTML ='Perrin Aybarra is'
    }
    if(AstroSign == "Nyneave Al Mira 10/24-11/21"){
      console.log('nyaeneve')
      heroObj.src = './images/nynaeve320.jpg';
      herotextObj.innerHTML ='Nyneave Al Mira is'
    }
    if(AstroSign == "Egwene Alvir 9/23-10/23"){
      console.log('egwene')
      heroObj.src = './images/egwene320.jpg';
      herotextObj.innerHTML ='Egwene Alvir is'
    }
    if(AstroSign == "Elayne Trakand 8/23-9/22"){
      console.log('elayne')
      heroObj.src = './images/elayne320.jpg';
      herotextObj.innerHTML ='Elayne Trakand is'
    }
    if(AstroSign == "Moiraine Damodred 7/23-8/22"){
      console.log('moiraine')
      heroObj.src = './images/moiraine320.jpg';
      herotextObj.innerHTML ='Moiraine Damodred is'
    }
    if(AstroSign == "al'Lan Mandragoran 6/22-7/22"){
      console.log('lan')
      heroObj.src = './images/lan320.jpg';
      herotextObj.innerHTML ='au Lan Mandraguran is'
    }
    if(AstroSign == "Aviendha 5/21-6/21"){
      console.log('aviendha')
      heroObj.src = './images/aviendha320.jpg';
      herotextObj.innerHTML ='Aviendha is'
    }
    if(AstroSign == "Elmindreda Farshaw 4/20-5/20"){
      console.log('min')
      heroObj.src = './images/min320.jpg';
      herotextObj.innerHTML ='Elmindreda Farshaw is'
    }
    if(AstroSign == "Faile Bashere 3/21-4/19"){
      console.log('faile')
      heroObj.src = './images/faile320.jpg';
      herotextObj.innerHTML ='Faile Bashere is'
    }
    if(AstroSign == "Loial 2/19-3/20"){
      console.log('loial')
      heroObj.src = './images/loial320.jpg';
      herotextObj.innerHTML ='Loial is'
    }
    if(AstroSign == "Matrim Cauthon 1/20-2/18"){
      console.log('mat')
      heroObj.src = './images/mat320.jpg';
      herotextObj.innerHTML ='Matrim Cauthon is'
    }
}

function dateToZodiac(whichMonth,whichDayOfMonth){
    if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
        AstroSign = "Rand Al'thor 12/22-1/19";
      } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
        AstroSign = "Parrin Aybarra 11/22-12/21";
      } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
        AstroSign = "Nyneave Al Mira 10/24-11/21";
      } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
        AstroSign = "Egwene Alvir 9/23-10/23";
      } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
        AstroSign = "Elayne Trakand 8/23-9/22";
      } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
        AstroSign = "Moiraine Damodred 7/23-8/22";
      } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
        AstroSign = "al'Lan Mandragoran 6/22-7/22";
      } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
        AstroSign = "Aviendha 5/21-6/21";
      } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
        AstroSign = "Elmindreda Farshaw 4/20-5/20";
      } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
        AstroSign = "Faile Bashere 3/21-4/19";
      } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
        AstroSign = "Loial 2/19-3/20";
      } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
        AstroSign = "Matrim Cauthon 1/20-2/18";
      }
      else {
          AstroSign = "Invalid Date"
      }
      return AstroSign;
      console.log(AstroSign);
}
//doSomething();*/