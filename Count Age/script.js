
const newYear='17 aug 1999';

function countDown(){
    const newYearDate=new Date(newYear);
    const currentDate=new Date();
    const totalSecond=(currentDate-newYearDate)/1000;

    const years=Math.floor(totalSecond/3600/24/365);
    const days=Math.floor(totalSecond/3600/24)%365;
    const hours=Math.floor(totalSecond/3600)%24;
    const mins=Math.floor(totalSecond/60)%60;
    const secs=Math.floor(totalSecond)%60;
    

    document.querySelector('#years').textContent= years;
    document.querySelector('#days').textContent= days;
    document.querySelector('#hours').textContent=hours;
    document.querySelector('#mins').textContent=mins;
    document.querySelector('#sec').textContent=secs;
}

countDown();
  setInterval(countDown,1000);