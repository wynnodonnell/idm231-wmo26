//My first lines of function code
let zodDateObj = document.getElementById('zodDate');
let showmeObj = document.getElementById('showme');

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
}

function dateToZodiac(whichMonth,whichDayOfMonth){
    if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
        AstroSign = "Rand Al'thor 12/22-1/19";
      } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
        AstroSign = "Parrin Aybarra 11/22-12/21";
      } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
        AstroSign = "Nyneave Al Mira 10/24-11/21";
      } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
        AstroSign = "Eguane Alvir 9/23-10/23";
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
//doSomething();