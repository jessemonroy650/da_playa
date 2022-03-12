//
//
if ( theExtensions.includes('time_clock') ) {
  console.log("GOT clock");
  var myDate   = new Date();
  var myDay    = myDate.getDay();
  var alarmSet = false;
  var alarmHour   = 0;
  var alarmMinute = 0;
  var alarmSecond = 0;

  function doClearInterval() {
    clearInterval(intervalID);
  }
  function checkAlarm(h,m,s) {
    if (h == alarmHour) {
      if (m == alarmMinute) {
        if (s == alarmSecond) {
          console.log("ALARM " + h + ":" + m + ":" + s);
          alarmSet = false;
          console.log("alarmSet " + alarmSet);
          // check context
          if ( theExtensions.includes('alarm-sound') ) {
            os.start();  
            os.stop(context.currentTime + 5); // stop 5 seconds after the current time
          } else {
            alert("ALARM " + h + ":" + m + ":" + s);
          }
        }
      }
    }
  }
  // 
  function setSeconds() {
    myDate = new Date();
    hours   = myDate.getHours();
    minutes = myDate.getMinutes();
    seconds = myDate.getSeconds();
    if ( hours   < 10 ) { hours    = '0'+ hours; }
    if ( minutes < 10 ) { minutes  = '0'+ minutes; }
    if ( seconds < 10 ) { seconds  = '0'+ seconds;}

    if ( alarmSet == true ) {
      checkAlarm(hours, minutes, seconds);
    }

    //console.log(seconds);
    document.getElementById('hours').textContent   = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    //clearInterval(intervalID);
  }

  intervalID = setInterval(setSeconds, 1000);
} else {
  console.log("NO clock");
}
//
//
if ( theExtensions.includes('time_alarm') ) {
  console.log("GOT alarm");
  var myAlarm_hour   = 0;
  var myAlarm_minute = 0;
  var myAlarm_second = 0; 
  //
  function setAlarm() {
    console.log("Setting alarm");
    alarmHour   = prompt("Hour", hours);
    alarmMinute = prompt("Minute", minutes);
    alarmSecond = prompt("Seconds", seconds);
    //
    document.getElementById('alarm_hour').textContent   = alarmHour;
    document.getElementById('alarm_minute').textContent = alarmMinute;
    document.getElementById('alarm_second').textContent = alarmSecond;
    //
    alarmSet  = true;
    //
    console.log("Hour:"   + alarmHour);
    console.log("Minute:" + alarmMinute);
    console.log("Second:" + alarmSecond);
  }
} else {
  console.log("NO alarm");
}
//
//
if ( theExtensions.includes('alarm_sound') ) {
  console.log("GOT alarm_sound");
  //
  // use one context per document. Here we are creating one context for one document. You can create for other documents also
  var context = new (window.AudioContext || window.webkitAudioContext)();

  // oscillator
  var os = context.createOscillator();  
  os.type = 'sine'; // sine is the default. So you can also use square, saw tooth, triangle
  os.frequency.value = 500; // setting the frequency Hz
  os.connect(context.destination); // connecting  to the destination

  // starting the oscillator
  // os.start();  
  // os.stop(context.currentTime + 5); // stop 5 seconds after the current time
} else {
  console.log("NO alarm_sound");
}
//
/*** HTML ***

<div style="float:right;">
<div><span id=day>Today is <span id=date></span>: <span id=dow></span></div>

<div id=time><span id=hours></span>:<span id=minutes></span>:<span id=seconds></span></div>

<button onclick="doClearInterval()">STOP CLOCK</button>

<div id=alarm><span id=alarm_hour></span>:<span id=alarm_minute></span>:<span id=alarm_second></span></div>
<button onclick="setAlarm()">SET ALARM</button>
</div>

*/