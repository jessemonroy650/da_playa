/*
  Interface Basics - 2022-02-18

  Id                   - purpose
  "status"             - LIST RESET, Not Loaded, Ready, paused, playing, listEnd
                       -      reset, notLoaded,  ready, paused, playing, listEnd
  'title'              - Title assigned by the creator
  'sofar'              - seconds so far of the media
  'items-sofar'        - "X" of "Y" (X='video-current', Y='video-total')
  'duration'           - totals seconds of the media

  "youtube-example"    - div of YouTube video canvas
  "rumble-example"     - div of Rumble video canvas
  "soundcloud-example" - div of SoundCloud canvas

  'video-current'      - 
  'video-slot'         - 
  'video-url'          - 

  'marked'             - textarea for list of URLs
  'marked-notes'       - textarea for list of notes
  'commit_marker'      - UI indicator that data from textarea commited

*/
Seconds_sofar    = 0;
Seconds_duration = 0;
//
function ui_update_status(the_status) {
  switch(the_status) {
    case 'reset':
      console.log('ui_status_update: ' + the_status);
      document.getElementById("status").textContent      = 'LIST RESET';
      document.getElementById("status").style.fontWeight = 'bold';
    break;
    case 'pending':
      console.log('ui_status_update: ' + the_status);
      document.getElementById("status").textContent      = 'pending';
      document.getElementById("status").style.fontWeight = 'normal';
    break;
    case 'notLoaded':
      console.log('ui_status_update: ' + the_status);
      document.getElementById("status").textContent      = 'Not Loaded';
      document.getElementById("status").style.fontWeight = 'normal';
    break;
    case 'ready':
      console.log('ui_status_update: ' + the_status);
      document.getElementById("status").textContent      = 'Ready';
      document.getElementById("status").style.fontWeight = 'normal';
    break;
    case 'paused':
      console.log('ui_status_update: ' + the_status);
      document.getElementById("status").textContent      = 'paused';
      document.getElementById("status").style.fontWeight = 'normal';
    break;
    case 'playing':
      console.log('ui_status_update: ' + the_status);
      document.getElementById("status").textContent      = 'playing';
      document.getElementById("status").style.fontWeight = 'normal';
    break;
    case 'videoEnd':
      console.log('ui_status_update: ' + the_status);
      document.getElementById("status").textContent      = 'videoEnd';
      document.getElementById("status").style.fontWeight = 'bold';
    break;
    case 'podcastEnd':
      console.log('ui_status_update: ' + the_status);
      document.getElementById("status").textContent      = 'podcastEnd';
      document.getElementById("status").style.fontWeight = 'bold';
    break;
    case 'listEnd':
      console.log('ui_status_update: ' + the_status);
      document.getElementById("status").textContent      = 'listEnd';
      document.getElementById("status").style.fontWeight = 'bold';
    break;

  }
}
//
function ui_update_list_pointer() {
  current = Number(myStorage.getItem('video-current')) + 1;
  total   = Number(myStorage.getItem('video-total'));
  document.getElementById('items-sofar').textContent = current  + ' of ' + total;
}
/*****
  Style visibility Property
  https://www.w3schools.com/jsref/prop_style_visibility.asp
  + visible, hidden, collapse, initial, inherit

  Style display Property
  https://www.w3schools.com/jsref/prop_style_display.asp
  + block, inline, inline-block, none (more)

*****/
function ui_update_media_block_visibility(which, what) {
  switch(which) {
    case 'youtube-wrap':
        if ( what == 'show' ) {
          document.getElementById(which).style.display = 'inline';
        } else {
          document.getElementById(which).style.display = 'none';
        }
    break;
    case 'rumble-example':
        if ( what == 'show' ) {
          document.getElementById(which).style.display = 'inline';
        } else {
          document.getElementById(which).style.display = 'none';
        }
    break;
    case 'soundcloud-wrap':
        if ( what == 'show' ) {
          // document.getElementById(which).style.visibility = 'visible';
          document.getElementById(which).style.display = 'block';
        } else {
          // document.getElementById(which).style.visibility = 'collapse';
          document.getElementById(which).style.display = 'none';
        }
    break;
  }
}
/*****

*****/
function ui_update_location_text(theHost,theMediaId) {
  switch(theHost) {
    case 'youtube.com':
      document.getElementById('video-url').value = 'https://www.youtube.com/watch?v=' + theMediaId;
    break;
    case 'rumble.com':
      // document.getElementById('video-url').value = 'Need add'; 
      document.getElementById('video-url').value = RUMBLE_OBJECT.getCurrentVideo().link;
    break;
    case 'soundcloud.com':
      document.getElementById('video-url').value = 'Need add';
    break;
  }
}
/*

*/
function ui_update_media_title(title) {
  switch(theHost) {
    case 'youtube.com':
      document.getElementById("title").textContent = 'NEED UPDATE';
    break;
    case 'rumble.com':
      document.getElementById("title").innerHTML   = title;
    break;
    case 'soundcloud.com':
      document.getElementById("title").textContent = title;
    break;
  }
}
//
function ui_update_media_pointer_sofar() {
  switch(theHost) {
    case 'youtube.com':
      document.getElementById('sofar').textContent = Math.round(yt_player.getCurrentTime());
    break;
    case 'rumble.com':
      // document.getElementById('sofar').textContent = Seconds_sofar;
      document.getElementById('sofar').textContent = Math.round(RUMBLE_OBJECT.getCurrentTime());
    break;
    case 'soundcloud.com':
      document.getElementById('sofar').textContent = Math.round(Seconds_sofar/1000);
      //console.log(sc_player.getPosition());
    break;
  }
}
//
function ui_update_media_pointer_duration() {
  switch(theHost) {
    case 'youtube.com':
      document.getElementById('duration').textContent = Math.round(yt_player.getDuration());
    break;
    case 'rumble.com':
      // document.getElementById('duration').textContent = Seconds_duration;
      document.getElementById('duration').textContent = Math.round(RUMBLE_OBJECT.getDuration());
    break;
    case 'soundcloud.com':
      document.getElementById('duration').textContent = Math.round(Seconds_duration/1000);
    break;
  }
}
//
function ui_update_platform_logo(host) {
  document.getElementById('platform_logo').src = "img/" + host  + "_logo.png";
}


/*
  FUNCTIONS in the file
  ui_update_status(the_status)
  ui_update_list_pointer()
  ui_update_media_block_visibility(which, what)
  ui_update_location_text(theHost,theMediaId)
  ui_update_media_pointer_sofar();
  ui_update_media_pointer_duration();
  ui_update_platform_logo(host);

*/