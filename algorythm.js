//My first lines of function code
let zodiacinfoObj = document.getElementById('zodiacinfo');
let showmeObj = document.getElementById('showme');
let zodiacs = [
    'Capercorm',
    'Sagging Charriot',
    'Scopian',
    'Liberal',
    'Virgin',
    'Leonard',
    'Candid Photography',
    'Gems and gold',
    'Tau Tau',
    'Ari Miller',
    'Pishposh',
    'Aquaphina',
];
let zodDates = [
'Dec 22.. Jan 19',
'Nov 22.. Dec 21',
'Oct 24.. Nov 21',
'Sep 23.. Oct 23',
'Aug 23.. Sep 22',
'Jul 23.. Aug 22',
'Jun 22.. Jul 22',
'May 21.. Jun 21',
'Apr 20.. May 20',
'Mar 21.. Apr 19',
'Feb 19.. Mar 20',
'Jan 20.. Feb 18'
]

function computeZod(){
    console.log('computeZod called!');
    let userPicked = zodiacinfoObj.value;
    console.log('user picked: ' + userPicked);
    showmeObj.innerHTML = 'Your Zodiac sign is ' + zodiacs[userPicked - 1] + ' ' + 'which is from ' + zodDates[userPicked -1];
}

//doSomething();