/* 2022-01-30T09:10:20 */
const myStorage = window.localStorage;

myStorage.setItem('video-order', '1,2,3,4');
// myStorage.setItem('video-current','1');

myStorage.setItem('1','host:youtube.com,videoId:Q7-X30HumKA');
myStorage.setItem('2','host:youtube.com,videoId:GSbXKgGVmAY');
myStorage.setItem('3','host:youtube.com,videoId:uQg9eOB-uD8');
myStorage.setItem('4','host:youtube.com,videoId:Bv4FAkp9Bbg');


<!-- #### -->
<!-- #### -->

var theOrder   = "";
var theItem    = "";
var prevItem   = "";
var theSlot    = "";
var theHost    = "";
var theVideoId = "";

var peskyYouTubeScriptId = "";

theOrder = myStorage.getItem('video-order');
theItem  = myStorage.getItem('video-current');
theSlot  = myStorage.getItem(theItem);

console.log("theSlot " + theSlot);


      data = theSlot.split(",");
   theHost = data[0].split(":");
theVideoId = data[1].split(":")[1];

function set_next_video() {
  theItem  = myStorage.getItem('video-current');
  console.log("theItem " + theItem);
  theItem  = String(Number(theItem) + 1);
  console.log("theItem " + theItem);
  myStorage.setItem('video-current', theItem);
}


function status_update() {
  console.log("got status_update SIGNAL");
  //myStorage = window.localStorage;

  theOrder = myStorage.getItem('video-order');
  theItem  = myStorage.getItem('video-current');
  theSlot  = myStorage.getItem(theItem);

  //console.log(theOrder + " " + theItem + " " + theSlot);

  document.getElementById('video-order').textContent    = theOrder;
  document.getElementById('video-current').textContent  = theItem;
  document.getElementById('video-slot').textContent     = theSlot;

  return;
}

function video_kickstart() {
  //
  theSlot  = myStorage.getItem(theItem);
  //
  data = theSlot.split(",");
  host  = data[0].split(":");
  video = data[1].split(":");

  theHost    = host[1];
  theVideoId = video[1];

  console.log("kickstart " + theHost + " " + theVideoId);

  video_set(theHost,theVideoId);
}

<!-- #### -->
<!-- #### -->

function video_next() {
  prevItem = theItem;
  //
  theItem  = String(Number(theItem) + 1);
  console.log("theItem " + theItem + " " + "prevItem " + prevItem);
  myStorage.setItem('video-current', theItem);

  //return;

  theSlot  = myStorage.getItem(theItem);
  //
  data  = theSlot.split(",");
  host  = data[0].split(":");
  video = data[1].split(":");

  theHost    = host[1];
  theVideoId = video[1];

  console.log("video_next " + theHost + " " + theVideoId);
  video_set(theHost,theVideoId);
}

//
function video_set(theplayer,thevideo) {
    //hide_players();
    playername = theplayer;
    videoId    = thevideo;
    //show_player();

    switch (playername) {
      case 'youtube.com':
        console.log("video_set got " + playername + " " + videoId );
        theSrc = "https://www.youtube.com/embed/" + videoId + "?enablejsapi=1"
        document.getElementById('iframe-example').src = theSrc;
        console.log("theSrc " + theSrc);

      break;
      case 'rumble.com':
        // playRumbleVideo();
      break;
    }
}
