setInterval (() => {
    d = new Date();
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hrangle = 30*hr + min/2 ;
    minangle = 6*min ;
    secangle = 6*sec;
  
    document.getElementsByClassName('hour').style.transform = `rotate(${hrangle}deg)`;
    document.getElementsByClassName('minute').style.transform = `rotate(${minangle}deg)`;
    document.getElementsByClassName('second').style.transform = `rotate(${secangle}deg)`;
    }, 1000);
