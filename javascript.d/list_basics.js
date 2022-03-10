/*
  Just the Basics - 2022-02-18

  Database Key    -
  'do-reset'      -
  'video-current' - pointer to the current video or audio clip
  'video-total'   - total number of video or audio clip
  0..Number()     - Index of video or audio clip
  
*/
//
// CANNOT CALL UNTIL widgets are defined
//
function myReset() {
  console.log("called myReset");
  myStorage.setItem('do-reset', 1);
  myStorage.setItem('video-current', 0);
  //document.location.reload();
  ui_update_status('reset');
  ui_update_list_pointer();
  //status_update();
}
//
function myNext() {
  if ( theExtensions.includes('notepad') ) {
    /* This needs to go before just the video/podcast ends & the page reloads. */
    commit_marked();
  }
  moveNearEnd();
}
//
// https://developers.google.com/youtube/iframe_api_reference#Playback_controls
//
function moveNearEnd() {
  switch(theHost) {
    case 'youtube.com':
      totalSeconds  = Math.round(yt_player.getDuration());
    break;
    case 'rumble.com':
      totalSeconds  = Math.round(RUMBLE_OBJECT.getDuration());
    break;
    case 'soundcloud.com':
      totalSeconds  = Math.round(Seconds_duration/1000);
        /* Math.round( SC.getDuration( function(the_duration) { return the_duration; } )); */
    break;
  }
  //
  moveToSeconds = totalSeconds - 2;
  console.log("moveToSeconds " + moveToSeconds);
  //
  switch(theHost) {
    case 'youtube.com':
      yt_player.seekTo(moveToSeconds);
    break;
    case 'rumble.com':
      RUMBLE_OBJECT.setCurrentTime(moveToSeconds);
    break;
    case 'soundcloud.com':
      sc_player.seekTo(Math.round( moveToSeconds * 1000));
    break;
  }
}

function do_reload() {
  document.location.reload();
}

function set_next_video() {
  theItem  = myStorage.getItem('video-current');
  console.log("theItem " + theItem);
  theItem  = Number(theItem) + 1;
  console.log("set_next_video " + theItem);
  myStorage.setItem('video-current', theItem);
}

function get_next_clipId() {
  theItem    = myStorage.getItem('video-current');
  theSlot    = myStorage.getItem(theItem);
  console.log("theItem " + theItem);
  console.log("theSlot " + theSlot);
  data       = theSlot.split(",");
  theHost    = data[0].split(":")[1];
  theVideoId = data[1].split(":")[1];
  console.log("theVideoId " + theVideoId);
  if ( theHost == 'soundcloud.com' ) {
    return theVideoId;
  } else {
    return 'END';
  }
}
//
//  Extended on 2022-02-12 as a single 'name' localStorage
//  Re-Added on 2022-02-21
//
function putSingleBigStore(name, value) {
  myStorage.setItem(name, value);
}
//
function getSingleBigStore(name) {
  return myStorage.getItem(name);
}
//
/*
    END * END * END
*/