//
//
if ( theExtensions.includes('time-alarm') ) {
  console.log("GOT clock");
  var myDate = new Date();
  var myDay = myDate.getDay();

  function doClearInterval() {
    clearInterval(intervalID);
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
if ( theExtensions.includes('alarm-sound') ) {
  console.log("GOT alarm-sound");
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
  console.log("NO alarm-sound");
}
//
/*** HTML ***

<div style="float:right;">
<div><span id=day>Today is <span id=date></span>: <span id=dow></span></div>

<div id=time><span id=hours></span>:<span id=minutes></span>:<span id=seconds></span></div>

<button onclick="doClearInterval()">STOP CLOCK</button>

<div id=alarm><span id=ahours></span>:<span id=aminutes></span>:<span id=aseconds></span></div>
<button onclick="doClearInterval()">SET ALARM</button>
</div>

*/