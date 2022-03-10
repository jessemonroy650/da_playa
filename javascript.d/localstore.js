/* 2022-01-30T09:10:20 */
const myStorage = window.localStorage;

myStorage.setItem('video-order', '1,2,3,4');
//myStorage.setItem('do-reset',0);
if ( myStorage.getItem('do-reset') == 1 ) {
  myStorage.setItem('video-current','1');
  myStorage.setItem('do-reset',0);
}

myStorage.setItem('1','host:youtube.com,videoId:Q7-X30HumKA');
myStorage.setItem('2','host:youtube.com,videoId:GSbXKgGVmAY');
myStorage.setItem('3','host:youtube.com,videoId:uQg9eOB-uD8');
myStorage.setItem('4','host:youtube.com,videoId:Bv4FAkp9Bbg');
myStorage.setItem('5','END');

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

console.log("theItem " + theItem);
console.log("theSlot " + theSlot);

if (theSlot  !== 'END' ) {
  data = theSlot.split(",");
  theHost = data[0].split(":");
  theVideoId = data[1].split(":")[1];
} else {
  theVideoId = 'END';
}

//
function clearStorage()    { myStorage.clear(); }
//
function removeSlot(tItem) { myStorage.removeItem(tItem); }

//
function myReset() {
  console.log("called myReset");
  // var myContent = document.getElementById('myinput').value;
  // localStorage.setItem('do-reset', myContent);
  myStorage.setItem('do-reset', 1);
  //document.location.reload();
}


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

<!-- #### -->
<!-- #### -->

