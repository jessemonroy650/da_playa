/*
  Rumble Player Routines - 2022-02-19

  ++ Rumble
  * https://www.rumbleplayer.com/developers/Player-Methods.html

*/
console.log("rumble_buttons " + theExtensions.includes('rumble_buttons'));
if ( theExtensions.includes('rumble_buttons') ) {
  console.log("rumble_buttons extension");
  if ( typeof RUMBLE_OBJECT == 'undefined' ) {
    console.log("CANNOT find RUMBLE_OBJECT()");
  } else {
    //
    RUMBLE_BUTTONS = {};
    console.log("GOT RUMBLE_OBJECT");
    //
    document.getElementById("rumble_buttons").style.display = "block";
    console.log(document.getElementById("rumble_buttons").style.display);
    //
    function rumble_forward() {
      totalSeconds  = Math.round(RUMBLE_OBJECT.getCurrentTime());
      moveToSeconds = totalSeconds + 10;
      //
      console.log("rumble_forward " + moveToSeconds);
      RUMBLE_OBJECT.setCurrentTime(moveToSeconds);   
    }
    //
    function rumble_backward() {
      totalSeconds  = Math.round(RUMBLE_OBJECT.getCurrentTime());
      moveToSeconds = totalSeconds - 10;
      //
      console.log("rumble_backward " + moveToSeconds);
      RUMBLE_OBJECT.setCurrentTime(moveToSeconds);       
    }
  }
}
/*** HTML ***
<span id=rumble_buttons style="display:none; float:right;padding-left:3em; padding-right:3em;" >
<button onclick="rumble_backward()">Backwards</button> &nbsp;
<button onclick="rumble_forward()">Forward</button>
</span>


<script id=da_playa_pro-bottom >
  store_to_marked();
</script>
*/